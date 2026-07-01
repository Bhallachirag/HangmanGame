import { getMaskedString } from "./MaskingUtility";

function MaskedText({ text, guessedLetters }) {
    const maskedString = getMaskedString(text, guessedLetters);

    return (
        <div className="flex flex-wrap justify-center gap-2 px-2">
            {maskedString.map((letter, index) => {
                const isSpace = letter === ' ';
                return (
                    <span
                        key={index}
                        className={`inline-flex items-center justify-center min-w-[2.2rem] h-12 rounded-2xl border text-lg font-semibold ${isSpace ? 'border-transparent bg-transparent' : 'border-slate-300 bg-slate-100 text-slate-900'}`}>
                        {isSpace ? '' : letter}
                    </span>
                );
            })}
        </div>
    );
}

export default MaskedText;