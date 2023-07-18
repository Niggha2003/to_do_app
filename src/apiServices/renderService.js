import * as request from '~/utils/request';

export const render = async () => {
    try {
        const response = await request.get('tasks');
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const postData = async (data) => {
    try {
        const response = await request.post('tasks', data);
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const deleteData = async (id) => {
    try {
        const response = await request.deleteData('tasks', id);
        return response;
    } catch (error) {
        console.log(error);
    }
};
