import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 78612b4badc4f55a7c00b33b35b6014725c5f4caa72cdff3c79c9c86e50a9529'
  }
});
