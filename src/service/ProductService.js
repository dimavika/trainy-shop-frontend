import axios from 'axios'

const PRODUCT_API_BASE_URL = "http://localhost:8080/catalog";

class ProductService {

    getProducts() {
         axios.get(PRODUCT_API_BASE_URL).then((res)=>console.log(res));
        return axios.get(PRODUCT_API_BASE_URL)
    }

    deleteProduct(id) {
        return axios.delete(PRODUCT_API_BASE_URL + '/' + id);
    }
}

export default new ProductService()