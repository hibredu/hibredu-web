import configAxios from 'axios';

const apiInstance = configAxios.create({
    baseURL: 'http://localhost:8080/',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    }
});

apiInstance.interceptors.request.use((config) => {
    const bearerToken = localStorage.getItem('access_token');
    if (
        bearerToken
        || bearerToken !== 'undefined'
        || bearerToken !== ''
        || bearerToken != null
    ) {
        config.headers.Authorization = `Bearer ${bearerToken}`;
    }
    return config;
});

export default apiInstance;