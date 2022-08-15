// pages/protected-page.js
import { withPageAuth, getUser } from '@supabase/auth-helpers-nextjs'

export default function ProtectedPage({ user, customProp }) {
  return <div>Protected content</div>
}

export const getServerSideProps = withPageAuth({
  redirectTo: '/foo',
  async getServerSideProps(ctx) {
    // Access the user object
    const { user, accessToken } = await getUser(ctx)
    return { props: { email: user?.email } }
  }
});