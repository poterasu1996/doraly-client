import { client } from './axios';

export class Request {
    static headers() {
        const headers = {
            'Content-Type': 'application/json',
        };
        const token = JSON.parse(localStorage.getItem('token'));
        if (token) {
            headers['Authorization'] = 'Bearer ' + token;
        }
        return headers;
    }

    static get(url, config = {}) {
        config = {
            ...config,
            headers: Request.headers(),
        };
        return client.get(url, config).then((resp) => resp.data);
    }

    static login(data) {
        return client.post('/api/account/login/', data).then((resp) => {
            return resp.data;
        });
    }

    static signup(data) {
        return client.post('/api/account/signup/', data).then((resp) => {
            return resp.data;
        });
    }

    static changePassword(data) {
        return client.post('/api/account/change_password_admin', data).then((resp) => {
            return resp.data;
        });
    }

    static getDisciplines() {
        return client
            .get('/api/account/get_list/disciplines/all')
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                console.log(error);
            });
    }

    static getAllByDiscipline(disciplineId) {
        return client.get(`/api/account/get_by/all?discipline=${disciplineId}`).then((r) => r.data);
    }

    static getDashboardData() {
        return client
            .get(`/api/landing/dashboard`, { headers: this.headers() })
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                console.log(error);
            });
    }

    static async createEvent(eventData) {
        const headers = this.headers();
        return await client.post('/api/core/event/', eventData, { headers }).then((r) => r.data);
    }

    static async endEvent(eventData, eventId) {
        return await client
            .post(`/api/core/event/end=${eventId}/`, eventData, { headers: this.headers() })
            .then((r) => r.data);
    }
    static async updateEvent(eventData) {
        const headers = this.headers();
        return await client.put(`/api/core/event/${eventData.id}/`, eventData, { headers }).then((r) => r.data);
    }

    static async getEvent(eventId) {
        return await client.get(`/api/core/event/${eventId}/`, { headers: this.headers() }).then((r) => r.data);
    }

    static getAllClassesByDiscipline(disciplineId) {
        return client.get(`/api/account/get_by/class?discipline=${disciplineId}`).then((r) => r.data);
    }

    static getWeightClassByRange(weightRange) {
        return client
            .get(`/api/account/weight_class/range/${weightRange}`, { headers: this.headers() })
            .then((r) => r.data);
    }

    static getFighters() {
        return client.get('/api/account/get_list/fighters', { headers: this.headers() }).then((r) => r.data);
    }

    static async uploadImage(imageFile) {
        const fd = new FormData();
        fd.append('image', imageFile);
        const headers = this.headers();
        headers['Content-Type'] = 'multipart/form-data';
        return await client.post('/api/images/', fd, { headers }).then((r) => r.data);
    }

    static getPaymentList() {
        return client.get('/api/payment/all').then((resp) => resp.data);
    }

    static getVenuesList() {
        return client.get('/api/payment/venue/all/', { headers: this.headers() }).then((r) => r.data);
    }

    static async getOneVenue(id) {
        const headers = this.headers();
        return await client.get(`/api/payment/venue/get/${id}/`, { headers }).then((resp) => resp.data);
    }

    static async createVenue(data) {
        const headers = this.headers();
        return await client.post('/api/payment/venue/add/', data, { headers }).then((resp) => resp.data);
    }

    static async updateVenue(data) {
        const headers = this.headers();
        return await client.put(`/api/payment/venue/update/${data.id}/`, data, { headers }).then((resp) => resp.data);
    }

    static async deleteVenue(id) {
        const headers = this.headers();
        return await client.delete(`/api/payment/venue/delete/${id}/`, { headers }).then((resp) => resp.data);
    }

    static getEventsByStatus(status) {
        const params = {};
        if (status !== 'events-all') {
            params['status'] = status;
        }
        return client
            .get('/api/core/event/list/', {
                params,
                headers: this.headers(),
            })
            .then((r) => r.data);
    }

    static getTicketsReport(dates, status) {
        return client
            .get(`/api/core/common/ticket/report/`, {
                headers: this.headers(),
                params: {
                    start: dates?.startDate,
                    end: dates?.endDate,
                    status: status,
                },
            })
            .then((r) => r.data);
    }

    static getEventFeedback(eventId) {
        return client.get(`api/core/event/details/${eventId}`, { headers: this.headers() }).then((r) => r.data);
    }
}
