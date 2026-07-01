import { useState } from "react";
import TextInputForm from "./TextInputForm";
import { useNavigate } from "react-router-dom";

function TextInputFormContainer(){

    const [inputType, setInputType] = useState("password");
    const [value, setvalue] = useState("");

    const navigate =  useNavigate();

    function handleFormSubmit(event){
        event.preventDefault();
        const trimmedValue = value.trim();
        if(trimmedValue){
            navigate(`/play`, { state: { wordSelected: trimmedValue } });      
        }
    } 

    function handleTextInputChange(event){
        setvalue(event.target.value);
    }  

    function handleShowHideClick(){
        console.log("show/hide button clicked"); 
        if(inputType === "password"){
            setInputType("text");
        }
        else{
            setInputType("password");
        }
    }

    return (
        <TextInputForm
            inputType={inputType}
            handleFormSubmit={handleFormSubmit}
            handleTextInputChange={handleTextInputChange}
            handleShowHideClick={handleShowHideClick}
            submitDisabled={!value.trim()}
        />);

}

export default TextInputFormContainer;