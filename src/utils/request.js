import axios from 'axios';

const request = axios.create({
    baseURL: 'http://localhost:3000/',
});

export const get = async (path, options = {}) => {
    const response = await request.get(path, options);
    return response;
};

export const post = async (path, data = {}) => {
    const response = await request.post(path, data);
    return response;
};

export const deleteData = async (path, id) => {
    const response = await request.delete(path + '/' + id);
    return response;
};
