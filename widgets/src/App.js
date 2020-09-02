import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Search from './components/Search';

const items = [
    {
        title: 'What is React?',
        content: 'react is a front end javascript framework',
    },
    {
        title: 'Why use React?',
        content: 'React is favorite among developers',
    },
    {
        title: 'How do use react',
        content: 'We use react by using components',
    },
];

const options = [
    {
        label: 'The Color Red',
        value: 'red',
    },
    {
        label: 'The Color Green',
        value: 'green',
    },
    {
        label: 'A Shade of Blue',
        value: 'blue',
    },
];

const App = () => {
    const [selected, setSelected] = useState(options[0]);
    return (
        <div style={{ marginTop: '10px' }}>
            <Dropdown
                selected={selected}
                onSelectedChange={setSelected}
                options={options}
            ></Dropdown>
        </div>
    );
};

export default App;
