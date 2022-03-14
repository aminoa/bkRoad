// import { Profiler } from 'react'
// import useSWR from 'swr'

// const fetcher = (...args) => fetch(...args).then((res) => res.json())

// function Profile() {
//   // const { data, error } = useSWR('/api/hello', fetcher)
//   const { data, error } = useSWR('https://api.namefake.com/random/random ', fetcher)

//   if (error) return <div>Failed to load</div>
//   if (!data) return <div>Loading...</div>

//   return (
//     <div>
//       <h1>{data.name}</h1>
//       <h1>{data.address}</h1>
//     </div>
//   )
// }

// export default Profile;

import React, { useEffect, useState } from "react";

function Profile() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    // fetch('api/profile-data')
    fetch('https://api.namefake.com/random/random')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.address}</p>
    </div>
  )
}

export default Profile;
