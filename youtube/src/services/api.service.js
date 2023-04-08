import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com"

const options = {
  params: {
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': '2e7fbd0e79msh82d7b82ca3cc53ep13ba42jsn3a4b51c85c0e',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};


export const ApiService = {
    async fetching(url){
        const response = await axios.get(`${BASE_URL}/${url}`,options)
        return response.data
    }
}