import React from 'react'
import Product from './Product'
import Title from './Title'
import Search from './Search'
import { getAllProducts, searchProducts } from '../services/products'
import ProductHistory from './ProductHistory'

class ProductContainer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedUrl: "",
            products: [],
            isFetch: true
        }
    }

    async componentDidMount() {
        const responseJson = await getAllProducts()
        this.setState({ products: responseJson.products, isFetch: false, selectedUrl: responseJson.products[0].url })
    }

    handleSearch = async (search) => {
        const responseJson = await searchProducts(search)
        this.setState({ products: responseJson.products, isFetch: false })
    }

    handleProductClick = (e) => {
        this.setState({selectedUrl: e});
    }

    render() {
        if (this.state.isFetch) {
            return "loading..."
        }
        
        return (
            <React.Fragment>
                <Title>fd</Title>
                <Search handleSearch={this.handleSearch} />
                <section className="products-container">
                    {
                        this.state.products.map((product) => <Product url={product.url}
                            name={product.name}
                            provider={product.provider}
                            key={product.id}
                            actualPrice={product.last_record.discounted_price}
                            actualDiscount={product.last_record.discount}
                            onaClick={this.handleProductClick}>
                        </Product>)
                    }
                </section>
                <ProductHistory url={this.state.selectedUrl} />
            </React.Fragment>
        )
    }
}

export default ProductContainer