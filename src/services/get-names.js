import http from './http'

export default async () => {
    const response = await http.get('name/');
    return response.data;
};