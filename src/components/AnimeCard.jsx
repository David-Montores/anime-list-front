import PropTypes from "prop-types"
import '../styles/AnimeCard.css'

export const AnimeCard = ({ animes }) => {
  return (
    <div className="grid-card">
      {animes.map((anime) => (
        <div className='anime-card' key={anime._id}>
          <a className="cover" href=""><img src={anime.images.jpg.image_url} /></a>
          <a href="">{anime.title}</a>
        </div>
      ))}
    </div>
  )
}

AnimeCard.propTypes = {
  animes: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      images: PropTypes.shape({
        jpg: PropTypes.shape({
          image_url: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    })
  ).isRequired,
}
