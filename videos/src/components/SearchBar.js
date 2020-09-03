import React from 'react';
import { render } from 'react-dom';

class SearchBar extends React.Component {
    state = { term: '' };

    onInputChange = (event) => {
        this.setState({
            term: event.target.value,
        });
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSearch(this.state.term);
    };

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <label>Video Search For a Video</label>
                    <input
                        type="text"
                        value={this.state.term}
                        onChange={this.onInputChange}
                    ></input>
                </form>
            </div>
        );
    }
}

export default SearchBar;
