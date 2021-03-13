import React from 'react'
import Product from './Product'
import Title from './Title'
import Search from './Search'
import { getAllProducts } from '../services/products'

class ProductContainer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            products: [],
            isFetch: true
        }
    }

    async componentDidMount() {
        const responseJson = await getAllProducts()
        this.setState({ products: responseJson.products, isFetch: false })
    }

    handleSearch = (e) => {
        console.log(e)
    }

    render() {
        if (this.state.isFetch) {
            return "loading..."
        }

        return (
            <React.Fragment>
                <Title>fd</Title>
                <Search handleSearch={this.handleSearch}/>
                <section className="products-container">
                    {
                        this.state.products.map((product) => <Product url={product.url}
                            name={product.name}
                            provider={product.provider}
                            key={product.id}
                            actualPrice={product.last_record.discounted_price}
                            actualDiscount={product.last_record.discount}>
                        </Product>)
                    }
                </section>
            </React.Fragment>
        )
    }
}

export default ProductContainer