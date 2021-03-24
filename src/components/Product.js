import React from 'react'
import PropTypes from 'prop-types'
import CurrencyFormat from 'react-currency-format';

const Product = ({ name, url, provider, actualPrice, actualDiscount, onaClick }) => {
    return <div className={"single-product " + provider+"-border"} onClick={() => {onaClick(url)}}>
        <h2 className="product-title">{name}</h2>
        <h3 className={"provider " + provider}>{provider}</h3>
        <p>Precio actual: <CurrencyFormat value={actualPrice} displayType={'text'} thousandSeparator={true} prefix={'$'} /></p>
        <p>Descuento actual: {actualDiscount}</p>
        <p className="product-link">{url}</p>
    </div>
}

Product.propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    provider: PropTypes.string.isRequired,
    actualPrice: PropTypes.number.isRequired,
    actualDiscount: PropTypes.string.isRequired,
    onaClick: PropTypes.func
}

export default Product