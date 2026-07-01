const ALPHABETS = "QWERTYUIOPASDFGHJKLZXCVBNM".split('');

function LetterButtons({ text, guessedLetters, onLetterClick, disabled = false }) {
    const originalLetters = new Set(text.toUpperCase().split(''));
    const guessedLettersSet = new Set(guessedLetters);

    const buttonStyle = function(letter) {
        if (guessedLettersSet.has(letter)) {
            return `${originalLetters.has(letter) ? 'bg-green-500' : 'bg-red-500' }`;
        } else {
            return 'bg-blue-500';
        }
    }

    function handleLetterClick(event) {
        const characterOfTheLetter = event.target.value;
        onLetterClick?.(characterOfTheLetter);
    }

    const buttons = ALPHABETS.map(letter => {
        return (
            <button
                key={`button-${letter}`}
                value={letter}
                onClick={handleLetterClick}
                disabled={disabled || guessedLettersSet.has(letter)}
                className={`h-10 w-10 sm:h-12 sm:w-12 m-1 text-sm sm:text-base font-semibold text-white rounded-lg ${buttonStyle(letter)} ${disabled ? 'opacity-60 cursor-not-allowed' : 'shadow-sm shadow-slate-500/10'}`}
            >
                { letter }
            </button>
        )
    })

    return (
        <div className="flex flex-wrap justify-center gap-1 max-w-[100%]">
            { buttons }
        </div>
    )
}

export default LetterButtons;