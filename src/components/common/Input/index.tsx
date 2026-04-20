import * as React from "react";
import './style.scss';

type InputProps = {
    placeholder: string,
    btnText: string
}

function Input({ placeholder, btnText }: InputProps) {

    return (
        <div className="input">
            <input type="text" placeholder={placeholder} />
            <button>{btnText}</button>
        </div>
    );
}

export default Input;