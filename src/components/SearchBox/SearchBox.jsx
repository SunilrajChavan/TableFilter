import React from "react";
import PropTypes from 'prop-types';

import "./SearchBox.scss"

class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    onSearch = event => {
        const { onSearch } = this.props;
        onSearch(event.target.value);
    };

    render() {
        const { searchValue } = this.props;
        return(
            <div className="search-box">
                <input
                className="search-box__input"
                placeholder="Search By Company Name"
                onChange={this.onSearch}
                value={searchValue}
                >
                </input>
            </div>
        )
    }
}

SearchBox.propTypes = {
    onSearch: PropTypes.func.isRequired,
    searchValue: PropTypes.string
}

export default SearchBox;
