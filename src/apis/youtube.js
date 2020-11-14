import axios from 'axios';
import youtubeKey from './config.js';


const KEY = youtubeKey;

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});