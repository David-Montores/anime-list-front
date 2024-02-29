import { useState } from 'react'
import { UseFetchAnimes } from './hooks/useFetchAnimes'
import { AnimeCard } from './components/AnimeCard'

export const AnimeApp = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const { animes, message, loading } = UseFetchAnimes(searchTerm)

  const searchAnime = (event) => {
    event.preventDefault()
    const valueTerm = event.target.elements.search.value 
    setSearchTerm(valueTerm)
  }

  return (
    <div className='container'>
      <h1>Animes</h1>

      <form onSubmit={searchAnime}>
        <input type="text" id="search" />
        <button type="submit">Buscar anime</button>
      </form>

      {loading && <h2>Cargando...</h2>}
      {animes.length === 0 && <h2>{message}</h2>}

      <AnimeCard animes={animes}/>
    </div>
  );
}
