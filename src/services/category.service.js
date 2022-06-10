import axios from 'axios';

class CategoryService {
    getList() {
        return axios.get('/list');
    }
    delete(id) {
        return axios.delete('/category/' + id);
    }
    save(data, id) {
        let request = {
            url: '/category',
            method: 'PUT',
            data: data
        }

        if (id) {
            request.url += '/' + id
            request.method = 'PUT'
        } else {
            request.method = 'POST'
        }

        return axios(request);
    }
}

export default new CategoryService();