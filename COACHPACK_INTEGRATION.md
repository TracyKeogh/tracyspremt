# Connecting Mobile App with CoachPack Web Application

This document explains how to connect the mobile app authentication with the CoachPack web application.

## Overview

Both the mobile app and CoachPack web application use Supabase for authentication and data storage. This allows users to:

1. **Sign up on either platform** and use the same credentials on both
2. **Sync data** between mobile and web seamlessly
3. **Share actions and diary entries** across platforms

## Architecture

```
┌─────────────────┐         ┌──────────────┐         ┌─────────────────┐
│   Mobile App    │◄───────►│   Supabase   │◄───────►│  CoachPack Web  │
│  (React Native) │         │   Database   │         │   (React/Next)  │
└─────────────────┘         └──────────────┘         └─────────────────┘
```

## Setup Steps

### 1. Use the Same Supabase Project

Both apps must point to the **same Supabase project**:

#### Mobile App (.env)
```env
EXPO_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
EXPO_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
```

#### CoachPack Web (.env or .env.local)
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
# or for React apps:
REACT_APP_SUPABASE_URL=https://your-project.supabase.co
REACT_APP_SUPABASE_ANON_KEY=your_anon_key_here
```

### 2. Database Schema for Cross-Platform Sync

Create these tables in your Supabase project:

#### Users Profile Table
```sql
CREATE TABLE user_profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Users can view their own profile"
  ON user_profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile"
  ON user_profiles FOR UPDATE
  USING (auth.uid() = id);
```

#### Actions Table (From CoachPack)
```sql
CREATE TABLE actions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  frequency TEXT NOT NULL CHECK (frequency IN ('daily', 'weekly', 'monthly')),
  day_of_week INTEGER, -- For weekly actions (0-6)
  day_of_month INTEGER, -- For monthly actions (1-31)
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE actions ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Users can manage their own actions"
  ON actions FOR ALL
  USING (auth.uid() = user_id);
```

#### Diary Entries Table (Mobile App)
```sql
CREATE TABLE diary_entries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  time_slot TEXT NOT NULL,
  content TEXT,
  action_id UUID REFERENCES actions(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, date, time_slot)
);

-- Enable RLS
ALTER TABLE diary_entries ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Users can manage their own diary entries"
  ON diary_entries FOR ALL
  USING (auth.uid() = user_id);

-- Index for faster queries
CREATE INDEX idx_diary_entries_user_date 
  ON diary_entries(user_id, date);
```

### 3. Implementing Authentication in CoachPack Web

If you haven't already, here's how to set up authentication in your CoachPack web app:

#### Create Supabase Client (web)
```typescript
// lib/supabase.ts or utils/supabase.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
```

#### Auth Context (web)
```typescript
// contexts/AuthContext.tsx
import { createContext, useContext, useEffect, useState } from 'react'
import { Session, User } from '@supabase/supabase-js'
import { supabase } from '@/lib/supabase'

interface AuthContextType {
  user: User | null
  session: Session | null
  loading: boolean
  signUp: (email: string, password: string) => Promise<any>
  signIn: (email: string, password: string) => Promise<any>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      setUser(session?.user ?? null)
      setLoading(false)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session)
        setUser(session?.user ?? null)
        setLoading(false)
      }
    )

    return () => subscription.unsubscribe()
  }, [])

  const signUp = async (email: string, password: string) => {
    return await supabase.auth.signUp({ email, password })
  }

  const signIn = async (email: string, password: string) => {
    return await supabase.auth.signInWithPassword({ email, password })
  }

  const signOut = async () => {
    await supabase.auth.signOut()
  }

  return (
    <AuthContext.Provider value={{ user, session, loading, signUp, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within AuthProvider')
  return context
}
```

### 4. Syncing Actions to Mobile App

To fetch actions from CoachPack in the mobile app:

```typescript
// In mobile app - services/actionsService.ts
import { supabase } from '../lib/supabase'

export interface Action {
  id: string
  title: string
  description: string
  frequency: 'daily' | 'weekly' | 'monthly'
  is_active: boolean
}

export async function fetchUserActions(): Promise<Action[]> {
  const { data, error } = await supabase
    .from('actions')
    .select('*')
    .eq('is_active', true)
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching actions:', error)
    return []
  }

  return data || []
}

export async function getDailyActions(): Promise<Action[]> {
  const { data, error } = await supabase
    .from('actions')
    .select('*')
    .eq('is_active', true)
    .eq('frequency', 'daily')

  if (error) {
    console.error('Error fetching daily actions:', error)
    return []
  }

  return data || []
}

export async function getWeeklyActions(dayOfWeek: number): Promise<Action[]> {
  const { data, error } = await supabase
    .from('actions')
    .select('*')
    .eq('is_active', true)
    .eq('frequency', 'weekly')
    .eq('day_of_week', dayOfWeek)

  if (error) {
    console.error('Error fetching weekly actions:', error)
    return []
  }

  return data || []
}
```

### 5. Adding Actions to Diary Entries

Update the diary to allow linking actions:

```typescript
// In mobile app - update diary entry
import { supabase } from '../lib/supabase'

export async function createDiaryEntry(
  timeSlot: string,
  content: string,
  actionId?: string
) {
  const today = new Date().toISOString().split('T')[0]
  
  const { data, error } = await supabase
    .from('diary_entries')
    .upsert({
      date: today,
      time_slot: timeSlot,
      content,
      action_id: actionId,
      updated_at: new Date().toISOString()
    }, {
      onConflict: 'user_id,date,time_slot'
    })

  if (error) {
    console.error('Error saving diary entry:', error)
    return { error }
  }

  return { data }
}
```

### 6. Real-Time Sync (Optional)

Enable real-time updates when actions change:

```typescript
// In mobile app
import { useEffect } from 'react'
import { supabase } from '../lib/supabase'

export function useRealtimeActions(onUpdate: () => void) {
  useEffect(() => {
    const channel = supabase
      .channel('actions_changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'actions'
        },
        (payload) => {
          console.log('Actions changed:', payload)
          onUpdate()
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [onUpdate])
}
```

## Testing Cross-Platform Authentication

1. **Sign up on mobile app**:
   - Create account with email/password
   - Verify email

2. **Sign in on web app**:
   - Use the same credentials
   - Should work seamlessly

3. **Create actions on web**:
   - Add daily/weekly/monthly actions in CoachPack

4. **View actions on mobile**:
   - Actions should appear in the mobile app
   - Can be linked to diary entries

## Security Considerations

1. **Row Level Security (RLS)**: Always enable RLS on all tables
2. **User ID Filtering**: Ensure all queries filter by `auth.uid()`
3. **Environment Variables**: Never commit `.env` files
4. **API Keys**: Use anon key for client-side, service role key for server-side only

## Troubleshooting

### Users can't see data from other platform
- Verify both apps use the same Supabase project
- Check RLS policies are correctly set up
- Ensure `user_id` in tables matches `auth.uid()`

### Authentication not persisting
- Mobile: Check AsyncStorage is configured
- Web: Check browser localStorage isn't blocked
- Verify `persistSession: true` in Supabase config

### Actions not syncing
- Check RLS policies allow cross-platform access
- Verify table structure matches on both platforms
- Look for errors in browser/mobile console

## Next Steps

1. ✅ Set up shared Supabase project
2. ✅ Implement authentication on both platforms
3. 🚧 Create database schema
4. 🚧 Implement actions service in mobile app
5. 🚧 Add action picker to diary
6. 🚧 Enable real-time sync
7. 🚧 Add offline support

## Resources

- [Supabase Auth Docs](https://supabase.com/docs/guides/auth)
- [React Native AsyncStorage](https://react-native-async-storage.github.io/async-storage/)
- [Supabase RLS](https://supabase.com/docs/guides/auth/row-level-security)

