# Authentication Setup Guide

This mobile app uses Supabase for authentication, which allows seamless integration with the CoachPack web application.

## Features

- ✅ Sign up with email and password
- ✅ Sign in with email and password
- ✅ Email verification
- ✅ Persistent authentication state
- ✅ Cross-platform authentication (works with web app)
- 🚧 Future: Sync diary entries with CoachPack web actions

## Setup Instructions

### 1. Supabase Environment Variables

Create a `.env` file in the root directory with your Supabase credentials:

```env
EXPO_PUBLIC_SUPABASE_URL=your_supabase_url
EXPO_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 2. Supabase Database Schema

To enable full functionality, you'll need to create the following tables in your Supabase database:

#### Users Table (Already exists via Supabase Auth)
Supabase Auth automatically manages the `auth.users` table.

#### Diary Entries Table (Future implementation)
```sql
CREATE TABLE diary_entries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  time_slot TEXT NOT NULL,
  content TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, date, time_slot)
);

-- Enable Row Level Security
ALTER TABLE diary_entries ENABLE ROW LEVEL SECURITY;

-- Create policy to allow users to only see their own entries
CREATE POLICY "Users can view their own diary entries"
  ON diary_entries FOR SELECT
  USING (auth.uid() = user_id);

-- Create policy to allow users to insert their own entries
CREATE POLICY "Users can insert their own diary entries"
  ON diary_entries FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Create policy to allow users to update their own entries
CREATE POLICY "Users can update their own diary entries"
  ON diary_entries FOR UPDATE
  USING (auth.uid() = user_id);

-- Create policy to allow users to delete their own entries
CREATE POLICY "Users can delete their own diary entries"
  ON diary_entries FOR DELETE
  USING (auth.uid() = user_id);
```

#### Actions Table (For CoachPack Web Integration)
```sql
CREATE TABLE actions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  frequency TEXT NOT NULL, -- 'daily', 'weekly', 'monthly'
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE actions ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view their own actions"
  ON actions FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own actions"
  ON actions FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own actions"
  ON actions FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own actions"
  ON actions FOR DELETE
  USING (auth.uid() = user_id);
```

### 3. Using the Same Supabase Project with CoachPack Web

To enable cross-platform authentication:

1. **Use the same Supabase project** for both mobile and web apps
2. **Share the same environment variables** between both apps
3. Users can sign up on either platform and log in on the other
4. All user data is automatically synced via Supabase

#### Example for Web App (React/Next.js)

```javascript
// In your web app
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
```

### 4. Email Verification

By default, Supabase requires email verification. You can configure this in your Supabase dashboard:

1. Go to **Authentication** → **Settings**
2. Under **Email Auth**, toggle "Enable email confirmations"
3. Customize your email templates if needed

## App Structure

```
app/
├── (auth)/               # Authentication screens
│   ├── _layout.tsx      # Auth layout
│   ├── login.tsx        # Login screen
│   └── signup.tsx       # Sign up screen
├── (tabs)/              # Main app screens (protected)
│   ├── _layout.tsx      # Tab navigation
│   ├── index.tsx        # Diary screen
│   └── profile.tsx      # User profile
├── _layout.tsx          # Root layout with auth provider
└── +not-found.tsx       # 404 screen

contexts/
└── AuthContext.tsx      # Authentication context & hooks

lib/
└── supabase.ts         # Supabase client
```

## How Authentication Works

1. **App Initialization**: The app checks if a user is authenticated
2. **Routing Logic**:
   - If not authenticated → Redirect to login screen
   - If authenticated → Show main app (tabs)
3. **Authentication State**: Managed globally via `AuthContext`
4. **Protected Routes**: All routes in `(tabs)` require authentication

## Usage in Components

```typescript
import { useAuth } from '../contexts/AuthContext';

function MyComponent() {
  const { user, session, signIn, signUp, signOut } = useAuth();

  // Access user info
  console.log(user?.email);
  console.log(user?.user_metadata?.full_name);

  // Sign in
  await signIn(email, password);

  // Sign up
  await signUp(email, password, fullName);

  // Sign out
  await signOut();
}
```

## Future Enhancements

- [ ] Implement diary entry sync with Supabase
- [ ] Pull actions from CoachPack web app
- [ ] Real-time sync between mobile and web
- [ ] Offline support with local storage
- [ ] Password reset functionality
- [ ] Social authentication (Google, Apple)
- [ ] Profile editing
- [ ] Dark mode support

## Testing

To test the authentication:

1. Run the app: `npm run dev`
2. Try creating a new account
3. Check your email for verification
4. Sign in with your credentials
5. Test the same credentials on the web app
6. Verify that authentication works on both platforms

## Troubleshooting

### "Missing Supabase environment variables" error
- Make sure you have created a `.env` file with your Supabase credentials
- Restart the development server after adding environment variables

### Email verification not working
- Check your Supabase dashboard email settings
- Verify your email templates are configured
- Check spam folder

### Can't sign in on web app after signing up on mobile
- Ensure both apps use the same Supabase project URL and anon key
- Check that Row Level Security policies are set up correctly
- Verify that the user exists in Supabase dashboard

