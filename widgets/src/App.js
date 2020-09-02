import React from 'react';
import Accordion from './components/Accordion';
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

const App = () => {
    return (
        <div style={{ marginTop: '10px' }}>
            <Search></Search>
        </div>
    );
};

export default App;
