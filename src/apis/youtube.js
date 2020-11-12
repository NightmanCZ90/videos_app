import axios from 'axios';

const KEY = 'AIzaSyDmyldjVqRL4qn3Z5CeA0dYe7Te2OCorCk';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snipper',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});