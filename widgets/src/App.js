import './components/Colors.css';
import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Search from './components/Search';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

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
    // const [showDropdown, setShowDropdown] = useState(true);
    // return (
    //     <div style={{ marginTop: '10px' }}>
    //         <button
    //             onClick={() => {
    //                 setShowDropdown(!showDropdown);
    //             }}
    //         >
    //             Toggle Dropdown
    //         </button>
    //         {showDropdown ? (
    //             <Dropdown
    //                 selected={selected}
    //                 onSelectedChange={setSelected}
    //                 options={options}
    //             ></Dropdown>
    //         ) : null}
    //         <div className={selected.value}>{selected.label}</div>
    //     </div>
    // );

    return (
        <div>
            <Header></Header>
            <Route path="/">
                <Accordion items={items}></Accordion>
            </Route>
            <Route path="/list">
                <Search></Search>
            </Route>
            <Route path="/translate">
                <Translate></Translate>
            </Route>
            <Route path="/dropdown">
                <Dropdown
                    selected={selected}
                    onSelectedChange={setSelected}
                    options={options}
                ></Dropdown>
            </Route>
        </div>
    );
};

export default App;
