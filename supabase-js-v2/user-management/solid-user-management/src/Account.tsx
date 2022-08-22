import { AuthSession } from '@supabase/supabase-js'
import { Component, createEffect, createSignal } from 'solid-js'
import { supabase } from './supabaseClient'

interface Props {
	session: AuthSession
}

const Account: Component<Props> = ({ session }) => {
  const [loading, setLoading] = createSignal(true)
  const [username, setUsername] = createSignal<string|null>(null)
  const [website, setWebsite] = createSignal<string|null>(null)
  const [avatarUrl, setAvatarUrl] = createSignal<string|null>(null)

  createEffect(() => {
    getProfile()
  })

  const getProfile = async () => {
    try {
      setLoading(true)
      const { user } = session

      let { data, error, status } = await supabase
        .from('profiles')
        .select(`username, website, avatar_url`)
        .eq('id', user.id)
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setUsername(data.username)
        setWebsite(data.website)
        setAvatarUrl(data.avatar_url)
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    } finally {
      setLoading(false)
    }
  }

	const updateProfile = async (e: Event) => {
    e.preventDefault()

    try {
      setLoading(true)
      const { user } = session

      const updates = {
        id: user.id,
        username: username(),
        website: website(),
        avatar_url: avatarUrl(),
        updated_at: new Date(),
      }

      let { error } = await supabase.from('profiles').upsert(updates)

      if (error) {
        throw error
      }
    } catch (error) {
			if (error instanceof Error) {
				alert(error.message)
			}
    } finally {
      setLoading(false)
    }
  }

	return (
		<div aria-live="polite">
      {loading() ? (
        'Saving ...'
      ) : (
        <form onSubmit={updateProfile} class="form-widget">
          <div>Email: {session.user.email}</div>
          <div>
            <label for="username">Name</label>
            <input
              id="username"
              type="text"
              value={username() || ''}
              onChange={(e) => setUsername(e.currentTarget.value)}
            />
          </div>
          <div>
            <label for="website">Website</label>
            <input
              id="website"
              type="text"
              value={website() || ''}
              onChange={(e) => setWebsite(e.currentTarget.value)}
            />
          </div>
          <div>
            <button
              type="submit"
              class="button primary block"
              disabled={loading()}
            >
              Update profile
            </button>
          </div>
        </form>
      )}
      <button
        type="button"
        class="button block"
        onClick={() => supabase.auth.signOut()}
      >
        Sign Out
      </button>
    </div>
	)
}

export default Account
