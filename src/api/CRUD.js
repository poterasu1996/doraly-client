import { client } from "./axios"

export class API {
    static getProducts() {
        return client
            .get('/products')
            .then((resp) => resp.data)
            .catch((error) => {console.log(error)})
    }

    static getOneProduct(id) {
        return client
            .get(`/products/${id}`)
            .then((resp) => resp.data)
    }

    static async addProduct(data) {
        return await client
            .post('/products', data)
            .then(resp => resp.data)
            .catch(error => console.log(error))
    }

    static async updateProduct(data) {
        return await client
            .put(`/products/${data.id}`, data)
            .then(resp => resp.data)
            .catch(error => console.log(error))
    }

    static async deleteProduct(data) {
        const deletedItem = {...data, isDeleted: true}
        return await client
            .put(`/products/${data.id}`, deletedItem)
            .then(resp => resp.data)
            .catch(error => console.log(error))
    }
}