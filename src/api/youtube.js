import axios from 'axios'

const KEY = 'AIzaSyBSrl7wVUAD1jzAeUioGUVlZ921YkYxzaA'

export default axios.create({
    baseUrl: 'https://www.googleapis.com/youtube/v3',

    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video'
    }
})