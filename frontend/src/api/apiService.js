import axios from 'axios';


const getToken=()=>{
    return localStorage.getItem('USER_KEY');
}

export const userJoin=(authRequest)=>{
    return axios({
        'method':'POST',
        'url':"http://localhost:5000/api/v1/users/signup",
        'data':authRequest
    })
}





export const userLogin=(authRequest)=>{
    return axios({
        'method':'POST',
        'url':"http://localhost:5000/api/v1/users/login",
        'data':authRequest
    })
}


export const fetchUserData=()=>{
    return axios({
        method:'GET',
        url:"http://localhost:5000/api/v1/users/me",
        headers:{
            'Authorization':'Bearer '+getToken()
        }
    })
}

export const getCities = () => {
    return axios({
        method: 'GET',
        url:"http://localhost:5000/api/v1/flights",

    })
}


export const searchForFlight = (flightRequest) => {
    return axios({
        method: 'POST',
        url:"http://localhost:5000/api/v1/flights/search",
        'data': flightRequest
    })
}


export const bookingFlight = (flightId) => {
    return axios({
        method: 'GET',
        url:`http://localhost:5000/api/v1/bookings/checkout-session/${flightId}`,
        headers:{
            'Authorization':'Bearer '+getToken()
        }
    })
}

export const myFlights = () => {
    return axios({
        method: 'GET',
        url:`http://localhost:5000/api/v1/users/my-flights`,
        headers:{
            'Authorization':'Bearer '+getToken()
        }
    })
}


export const allUsers = () => {
    return  axios({
        'method': 'GET',
        'url': "http://localhost:5000/api/v1/users",
        headers:{
            'Authorization':'Bearer '+getToken()
        }
    })
}

export const deleteUser = (userId) => {
    return axios({
        'method': 'DELETE',
        'url': `http://localhost:5000/api/v1/users/${userId}`,
        headers:{
            'Authorization':'Bearer '+getToken()
        }
    })
}


export const currentUser = () => {
    return  axios({
        'method': 'GET',
        'url': "http://localhost:5000/api/v1/users/me",
        headers:{
            'Authorization':'Bearer '+getToken()
        }
    })
}


export const updateCurrentUser = (updateRequest) => {
    const formData = new FormData();
    for (const key in updateRequest) {
        formData.append(key, updateRequest[key]);
    }
    return  axios({
        'method': 'PATCH',
        'url': "http://localhost:5000/api/v1/users/updateMe",
        'data': formData,
        headers:{
            'Authorization': 'Bearer ' + getToken(),
            'Content-Type': 'multipart/form-data'
        }
    })
}


export const getAllCities = () => {
    return  axios({
        'method': 'GET',
        'url': "http://localhost:5000/api/v1/cities",
    })
}

export const getFlightBySlug = (slug) => {
    return axios({
        'method': 'GET',
        'url': `http://localhost:5000/api/v1/flights/destination/${slug}`
    })
}

export const getFlightsBasedOnLocation = (cityName) => {
    return axios({
        'method': 'POST',
        'url': "https://347d-169-150-218-58.ngrok-free.app/api/v1/flights/search/location",
        'data': cityName,

    })
}

export const updateCurrentUserPassword = (authRequest) => {
    return axios({
        'method': 'POST',
        'url': "http://localhost:5000/api/v1/users/updateMyPassword",
        'data': authRequest,
        headers:{
            'Authorization': 'Bearer ' + getToken(),
        }
    })
}


