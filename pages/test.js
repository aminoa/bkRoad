import { Profiler } from 'react'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

function Profile() {
  // const { data, error } = useSWR('/api/hello', fetcher)
  const { data, error } = useSWR('https://1cedpd3pjd.execute-api.us-east-1.amazonaws.com/latest/user/yourmom', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <div>
      <h1>{data.name}</h1>
    </div>
  )
}

export default Profile;
