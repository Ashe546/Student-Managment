import { useEffect, useState } from "react"

function useFetch(apiCall, defaultValue) {
  const [data, setData] = useState(defaultValue)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    apiCall().then(setData)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [])

  return { loading, data, error }
}

export default useFetch