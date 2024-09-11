import axios from "../index.js";
const _login =async (payload)=>{
    return await axios.post('/api/login', payload.data, {params:payload.params});
}
const _logOut =async (payload)=>{
    return await axios.post('/api/logout');
}

const _searchWorker =async (payload)=>{
    return await axios.get('/api/worker-by-pin', {params:payload.params});
}
const _getMe =async (payload)=>{
    return await axios.get('/api/profile', );
}

const _getUserTalons =async (payload)=>{
    return await axios.get('/api/user-talons', );
}

const _violator =async (payload)=>{
    return await axios.post('/api/worker-talon', payload.data, );
}


export default {
    _login,
    _logOut,
    _searchWorker,
    _getMe,
    _getUserTalons,
    _violator,
}