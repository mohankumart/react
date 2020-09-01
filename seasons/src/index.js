import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends Component {
    state = { lat: null, errorMessage: '' };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) =>
                this.setState({
                    lat: position.coords.latitude,
                }),
            (error) =>
                this.setState({
                    errorMessage: error.message,
                })
        );
    }

    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat}></SeasonDisplay>;
        }

        return <Spinner message="please accept location request"></Spinner>;
    }

    render() {
        return <div className="border red">{this.renderContent()}</div>;
    }
}

ReactDOM.render(<App></App>, document.querySelector('#root'));
