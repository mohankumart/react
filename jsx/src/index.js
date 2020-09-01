import React from 'react';
import ReactDOM from 'react-dom';

function hello() {
    return {
        mohn: 'dff',
    };
}
const App = () => {
    const buttonText = 'Click Me!!';
    const main = `jaj${buttonText}`;
    return (
        <div>
            <label htmlFor="s">sds</label>
            <input id="s" />
        </div>
    );
};

ReactDOM.render(<App></App>, document.querySelector('#root'));
