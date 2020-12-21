import axios from 'axios';

let api = axios.create({
    headers: {
        "Client-ID": "mrh0cfmlhzvfkvjitrf82kesyuy8r8",
        "Authorization": "Bearer u5rlhv5yokd3be4pmnxs5twta9rlbq"
        }
})

/*
    CLIENT_ID = 'abqmiq01a5kl87ldmzoqnrnud5vl4l';
    REDIRECT = 'http://127.0.0.1/';
    TOKEN = u5rlhv5yokd3be4pmnxs5twta9rlbq&scope
    

    LIEN AUTH = https://id.twitch.tv/oauth2/authorize?client_id=mrh0cfmlhzvfkvjitrf82kesyuy8r8
    &redirect_uri=https://127.0.0.1/&response_type=token


*/

export default api;
