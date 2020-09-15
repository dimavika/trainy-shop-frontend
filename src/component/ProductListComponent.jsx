import React, {Component} from 'react';
import ProductService from '../service/ProductService'

class ProductListComponent extends Component {
    constructor(props){
        super(props);

        this.state = {
            products: []
        };
        this.deleteProduct = this.deleteProduct.bind(this);
    }

    deleteProduct(id) {
        ProductService.deleteProduct(id).then(() => {
            this.setState({products: this.state.products.filter(product => product.id !== id)})
        });
    }

    componentDidMount() {
        ProductService.getProducts().then((res) => {
            this.setState({products: res.data});
        });
    }

    render() {
        return (

            <div className="container mt-5">
                <h1>Catalog</h1>
                {

                    this.state.products.map(
                        product =>
                    <div key={product.id} className="alert alert-info mt-2">
                        <h3>{product.title}</h3>
                        <p>{product.price}</p>
                        <button onClick={() => this.deleteProduct(product.id)} className="btn btn-danger">Delete</button>
                        {/*<form th:action="'/catalog/' + ${el.id} + '/remove'" method="post">*/}
                        {/*    <button class="btn btn-warning" type="submit">Delete</button>*/}
                        {/*</form>*/}
                        {/*<a th:href="'/catalog/' + ${el.id}">More</a>*/}
                    </div>
                    )
                }
        </div>
        );
    }
}

export default ProductListComponent;