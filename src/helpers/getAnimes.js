import axios from 'axios'

export const getAnimes = async (title = '') => {
    try {
        const response = await axios.get("http://localhost:8080/api/animes", {
            params: { title }
        })
        return response.data
    } catch (error) {
        console.error(error)
    }
}
