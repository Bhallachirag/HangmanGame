import getButtonStyle from "./getButtonStyle";

function Button({ text, onClickHandler, styleType ='primary', type='button' }) {
    console.log(text);

    return (
        <button 
            onClick={onClickHandler}
            type={type}
            className={`px-4 py-2 ${getButtonStyle(styleType)} text-black`}
        >
            {text}
        </button>
    );
}

export default Button;