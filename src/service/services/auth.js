import axios from "../index.js";
const _login =async (payload)=>{
    return await axios.post('/api/login', payload.data, {params:payload.params});
}
const _logOut =async (payload)=>{
    return await axios.post('/api/logout', payload.data, {params:payload.params});
}

const _searchWorker =async (payload)=>{
    return await axios.get('/api/worker-by-pin', {params:payload.params});
}

export default {_login, _logOut, _searchWorker}