# QFA Authentication Setup

This project includes email/password authentication along with Google and GitHub OAuth.

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/qfa"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-nextauth-secret-key-here"

# OAuth Providers
GITHUB_ID="your-github-client-id"
GITHUB_SECRET="your-github-client-secret"

GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
```

## OAuth Setup

### GitHub OAuth

1. Go to GitHub Settings > Developer settings > OAuth Apps
2. Create a new OAuth App
3. Set Authorization callback URL to: `http://localhost:3000/api/auth/callback/github`
4. Copy the Client ID and Client Secret to your `.env.local`

### Google OAuth

1. Go to Google Cloud Console
2. Create a new project or select existing one
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Set Authorized redirect URIs to: `http://localhost:3000/api/auth/callback/google`
6. Copy the Client ID and Client Secret to your `.env.local`

## Database Setup

1. Run the database migration:

```bash
npx prisma db push
```

2. Generate Prisma client:

```bash
npx prisma generate
```

## Running the Application

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

## Features

- ✅ Email/password authentication
- ✅ Google OAuth
- ✅ GitHub OAuth
- ✅ Protected routes (only `/user-profile` requires authentication)
- ✅ Modern UI with shadcn components
- ✅ Responsive design
- ✅ Server-side authentication checks
- ✅ Client-side session management

## Routes

- `/` - Public home page
- `/auth/login` - Login page
- `/auth/signup` - Signup page
- `/user-profile` - Protected user profile page
- `/api/auth/signup` - Signup API endpoint
- `/api/auth/[...nextauth]` - NextAuth API routes
