export function getMaskedString(originalWord, guessedLetters) {
    const guessedLetterSet = new Set(
        guessedLetters.map(letter => letter.toUpperCase())
    );

    return originalWord.split('').map(char => {
        if (char === ' ') {
            return ' ';
        }

        if (/[^A-Za-z]/.test(char)) {
            return char;
        }

        const upperChar = char.toUpperCase();
        return guessedLetterSet.has(upperChar) ? upperChar : '_';
    });
}