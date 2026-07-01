import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

function TextInputForm({ inputType, handleFormSubmit, handleTextInputChange, handleShowHideClick}){ 
    return(
        <form onSubmit={handleFormSubmit} className="space-y-5">
            <div>
                <TextInput 
                    type={inputType}
                    label="Enter a word or a phrase"
                    placeholder="Enter a word or a phrase here..."
                    onChangeHandler={handleTextInputChange}    
                />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
                <Button
                    styleType="warning"
                    text={inputType === "password" ? "Show" : "Hide"}
                    onClickHandler={handleShowHideClick}    
                />
                <Button
                    type="submit"
                    styleType="primary"
                    text="Submit"    
                />
            </div>
        </form>
    )
}

export default TextInputForm;