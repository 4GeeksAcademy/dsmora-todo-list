import React, { useState } from "react";

//include images into your bundle

//create your first component
const Input = () => {

    const [inputValue, setInputValue] = useState('');
    const [list, setList] = useState([]);

    const validate = (value) => {
        setInputValue(value);
    }

    const addItem = () => {
        list.unshift(inputValue);
        setList(list);
        setInputValue('');
    }


    return (
        <div className="text-center">
            <h1 className="text-center mt-5">Este es el input!</h1>
            <input type="text" onChange={e => validate(e.target.value)} value={inputValue} />
            <button onClick={() => addItem()}>
                añadir
            </button>

            <ul>
                lista:
                {
                    list.map((el, i) => (
                        <li key={i}>
                            {el}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Input;
