# Supabase Nuxt.js User Management

This is a WIP!

### 1. Create new project

Sign up to Supabase - [https://app.supabase.com](https://app.supabase.com) and create a new project. Wait for your database to start.

### 2. Run "User Management" Quickstart

Once your database has started, head over to your project's `SQL Editor` and run the "User Management Starter" quickstart. On the `SQL editor` page, scroll down until you see `User Management Starter: Sets up a public Profiles table which you can access with your API`. Click that, then click `RUN` to execute that query and create a new `profiles` table. When that's finished, head over to the `Table Editor` and see your new `profiles` table.

### 3. Get the URL and Key

Go to the Project Settings (the cog icon), open the API tab, and find your API URL and `anon` key, you'll need these in the next step.

The `anon` key is your client-side API key. It allows "anonymous access" to your database, until the user has logged in. Once they have logged in, the keys will switch to the user's own login token. This enables row level security for your data. Read more about this [below](#postgres-row-level-security).

![image](https://user-images.githubusercontent.com/10214025/88916245-528c2680-d298-11ea-8a71-708f93e1ce4f.png)

**_NOTE_**: The `service_role` key has full access to your data, bypassing any security policies. These keys have to be kept secret and are meant to be used in server environments and never on a client or browser.

### 4. Env vars

Create a file in this folder `.env`

```
NUXT_PUBLIC_SUPABASE_URL=
NUXT_PUBLIC_SUPABASE_ANON_KEY=
```

Populate this file with your URL and Key.

### 5. Run the application

Run the application: `npm run dev`. Open your browser to `https://localhost:3000/` and you are ready to go 🚀.

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:3000
npm run dev

# build for production and launch server
npm run build
npm run start

# generate static project
npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
