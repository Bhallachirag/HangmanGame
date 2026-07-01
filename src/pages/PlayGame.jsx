import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import MaskedText from "../components/MaskedText/MaskedText";
import LetterButtons from "../components/LetterButtons/LetterButtons";
import HangMan from "../components/HangMan/HangMan";
import { getMaskedString } from "../components/MaskedText/MaskingUtility";

function PlayGame() {
    const navigate = useNavigate();
    const { state } = useLocation();
    const word = state?.wordSelected?.trim() ?? "";

    const [guessedLetters, setGuessedLetters] = useState([]);
    const [wrongGuesses, setWrongGuesses] = useState(0);
    const maxWrongGuesses = 6;

    useEffect(() => {
        if (!word) {
            navigate("/start", { replace: true });
        }
    }, [navigate, word]);

    const maskedString = useMemo(
        () => getMaskedString(word, guessedLetters),
        [word, guessedLetters]
    );

    const isWinner = word.length > 0 && maskedString.every(letter => letter !== "_");
    const isGameOver = wrongGuesses >= maxWrongGuesses;
    const wrongLetters = guessedLetters.filter(letter => !word.toUpperCase().includes(letter));

    function handleLetterClick(letter) {
        if (!letter || guessedLetters.includes(letter) || isGameOver || isWinner) {
            return;
        }

        const normalizedLetter = letter.toUpperCase();
        setGuessedLetters(prevLetters => [...prevLetters, normalizedLetter]);

        if (!word.toUpperCase().includes(normalizedLetter)) {
            setWrongGuesses(prevCount => prevCount + 1);
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 py-8 px-4">
            <div className="mx-auto flex max-w-3xl flex-col gap-6">
                <header className="rounded-[32px] bg-slate-950/80 border border-white/10 p-6 text-center shadow-2xl shadow-slate-950/40">
                    <h1 className="text-4xl font-bold text-white">Hangman</h1>
                    <p className="text-sm text-slate-300 mt-3">
                        Guess the answer before the man is fully drawn.
                    </p>
                </header>

                <main className="rounded-[36px] bg-white/95 p-5 shadow-2xl shadow-slate-950/20 backdrop-blur-sm">
                    <div className="rounded-[28px] bg-slate-50 p-5 shadow-inner">
                        <h2 className="text-lg font-semibold text-slate-700 text-center mb-4">Choose letters</h2>
                        <LetterButtons
                            text={word}
                            guessedLetters={guessedLetters}
                            onLetterClick={handleLetterClick}
                            disabled={isWinner || isGameOver}
                        />
                    </div>

                    <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-start">
                        <div className="rounded-[28px] bg-slate-50 p-5 shadow-sm">
                            <HangMan wrongGuesses={wrongGuesses} maxGuesses={maxWrongGuesses} />
                        </div>

                        <div className="rounded-[28px] bg-slate-50 p-5 shadow-sm">
                            <div className="mb-4 text-center text-2xl tracking-[0.35em] font-semibold text-slate-900">
                                <MaskedText text={word} guessedLetters={guessedLetters} />
                            </div>

                            {isWinner && (
                                <p className="rounded-2xl bg-emerald-100 px-4 py-3 text-center text-emerald-900 font-semibold">
                                    🎉 You won! Great job.
                                </p>
                            )}

                            {isGameOver && !isWinner && (
                                <p className="rounded-2xl bg-rose-100 px-4 py-3 text-center text-rose-900 font-semibold">
                                    Game over. The correct word was: <span className="font-bold">{word}</span>
                                </p>
                            )}

                            {!isWinner && !isGameOver && (
                                <div className="space-y-3">
                                    <p className="text-slate-700">Wrong guesses: {wrongGuesses} / {maxWrongGuesses}</p>
                                    {wrongLetters.length > 0 && (
                                        <p className="text-sm text-rose-600">Wrong letters: {wrongLetters.join(", ")}</p>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </main>

                <div className="text-center">
                    <Link to="/start" className="inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-950/20 transition hover:bg-slate-800">
                        Start a new game
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default PlayGame;