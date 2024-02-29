import { useState, useEffect } from 'react'
import { getAnimes } from '../helpers/getAnimes'

export const UseFetchAnimes = (title = '') => {
  const [animes, setAnimes] = useState([])
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const setData = async() => {
      const response = await getAnimes(title)
      setMessage(response.msg)
      setAnimes(response.animes)
      setLoading(false)
    }

   setData()
  }, [title])

  return { animes, message, loading }
}
