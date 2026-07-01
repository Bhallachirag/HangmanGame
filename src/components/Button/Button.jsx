import getButtonStyle from "./getButtonStyle";

function Button({ text, onClickHandler, styleType ='primary', type='button', disabled = false }) {
    return (
        <button 
            onClick={onClickHandler}
            type={type}
            disabled={disabled}
            className={`inline-flex items-center justify-center rounded-full px-5 py-2 font-semibold transition ${getButtonStyle(styleType)} ${disabled ? 'cursor-not-allowed opacity-50' : 'hover:shadow-lg hover:brightness-105'}`}
        >
            {text}
        </button>
    );
}

export default Button;