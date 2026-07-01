import { useState } from "react";
import TextInputForm from "./TextInputForm";
import { useNavigate } from "react-router-dom";

function TextInputFormContainer(){

    const [inputType, setInputType] = useState("password");
    const [value, setvalue] = useState("");

    const navigate =  useNavigate();

    function handleFormSubmit(event){
        event.preventDefault();
        console.log("Form submitted", value);
        if(value){
            navigate(`/play`,{ state: { wordSelected: value } });      
        }
    } 

    function handleTextInputChange(event){
        console.log("Text input changed");
        console.log(event.target.value);
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
            />);

}

export default TextInputFormContainer;