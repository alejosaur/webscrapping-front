import React from 'react'

class Search extends React.Component {
    constructor(props) {
        super(props)

        this.state = { search: '' }
    }

    handleChange = (e) => {
        this.setState({search: e.target.value})
    }

    render() {
        const { handleSearch } = this.props
        return (
            <div className="search-container">
                <input
                    value={this.state.search}
                    className="search-input"
                    type="text"
                    onChange={ this.handleChange } />
                <button className="search-button" onClick={() => handleSearch(this.state.search)}>Buscar</button>
            </div>
        )
    }
}

export default Search