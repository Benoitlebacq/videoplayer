import axios  from 'axios';

const KEY = 'AIzaSyCJEHo-7DdZ1x1leWW0QP4hXySA7CIs-po' ; 

export default  axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key : KEY
    }
});