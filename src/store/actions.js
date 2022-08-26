import axios from 'axios'

const API_URL = "http://www.omdbapi.com?apikey=33c5f1cd"; //f70c8e
export const movies = (context,title)=>{
    axios.get(`${API_URL}&s=${title} `)
    .then(res=>{
        context.commit('SET_MOVIES', res.data, title)
        console.log(title);
    })
}