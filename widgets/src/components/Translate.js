import React, { useEffect, useState } from 'react';
import Convert from './Convert';
import Dropdown from './Dropdown';

const options = [
    { label: 'Africans', value: 'af' },
    { label: 'Arabic', value: 'ar' },
    { label: 'Hindi', value: 'hi' },
    { label: 'Dutch', value: 'd' },
];

const Translate = () => {
    const [language, setlanguage] = useState(options[0]);
    const [text, setText] = useState('');

    return (
        <div>
            <label>Enter Text</label>
            <input
                type="text"
                value={text}
                onChange={(event) => {
                    setText(event.target.value);
                }}
            ></input>
            <Dropdown
                label="Select a Language"
                selected={language}
                onSelectedChange={setlanguage}
                options={options}
            ></Dropdown>
            <hr></hr>
            <h3 className="ui header">Output</h3>
            <Convert text={text} language={language}></Convert>
        </div>
    );
};

export default Translate;
