const fs = require('fs');

// Create .env file with placeholder values
const envContent = `# Supabase Configuration
# Replace these with your actual Supabase project credentials
EXPO_PUBLIC_SUPABASE_URL=your_supabase_url_here
EXPO_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
`;

fs.writeFileSync('.env', envContent);
console.log('✅ Created .env file with placeholder values');
console.log('📝 Please edit .env and add your actual Supabase credentials');
console.log('🔗 Get your credentials from: https://supabase.com/dashboard');
