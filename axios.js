import axios from "axios";

const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3",
});

// while making a get request it goes like.
// instance.get('/foo-bar');
// https://api.themoviedb.org/3/foo-bar;

export default instance;