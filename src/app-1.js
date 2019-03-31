import React from 'react';
import Product from './app-2';

import {products} from './seed.js';

import './app-1.css';

class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productsState: [],
        };
        this.handleProductUpVote = this.handleProductUpVote.bind(this);
    }

    componentDidMount() {
        this.setState({
            productsState: products,
        });
    }

    handleProductUpVote(productId) {
        const nextProducts = this.state.productsState.map((products) => {
            if (products.id === productId) {
                return Object.assign({}, products, {
                    votes: products.votes + 1,
                });
            } else {
                return products;
            }
        });
        this.setState({
            productsState: nextProducts,
        });
    }

    render() {


        const productsSort = this.state.productsState.sort((a, b) => {
            return b.votes - a.votes
        });

        const productComponents = productsSort.map((product) => (
            <Product
                key={'product-' + product.id}
                id={product.id}
                title={product.title}
                description={product.description}
                url={product.url}
                votes={product.votes}
                submitterAvatarUrl={product.submitterAvatarUrl}
                productImageUrl={product.productImageUrl}
                onVote={this.handleProductUpVote}
            />
        ));

        return (
            <div className='ui unstackable items'>
                <h1>Popular Products</h1>
                <br />
                {productComponents}
            </div>
        )
    }
}

export default ProductList;