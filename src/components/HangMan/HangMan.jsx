function HangMan({ wrongGuesses = 0, maxGuesses = 6 }) {
    return (
        <div className="w-full max-w-[220px] mx-auto mb-4">
            <svg viewBox="0 0 200 260" className="w-full h-auto bg-slate-50 rounded-[28px] shadow-sm">
                <line x1="20" y1="240" x2="180" y2="240" stroke="#334155" strokeWidth="5" />
                <line x1="60" y1="240" x2="60" y2="20" stroke="#334155" strokeWidth="5" />
                <line x1="60" y1="20" x2="140" y2="20" stroke="#334155" strokeWidth="5" />
                <line x1="140" y1="20" x2="140" y2="45" stroke="#334155" strokeWidth="5" />

                {wrongGuesses > 0 && <circle cx="140" cy="70" r="14" fill="none" stroke="#334155" strokeWidth="5" />}
                {wrongGuesses > 1 && <line x1="140" y1="88" x2="140" y2="136" stroke="#334155" strokeWidth="5" />}
                {wrongGuesses > 2 && <line x1="140" y1="110" x2="116" y2="132" stroke="#334155" strokeWidth="5" />}
                {wrongGuesses > 3 && <line x1="140" y1="110" x2="164" y2="132" stroke="#334155" strokeWidth="5" />}
                {wrongGuesses > 4 && <line x1="140" y1="136" x2="120" y2="168" stroke="#334155" strokeWidth="5" />}
                {wrongGuesses > 5 && <line x1="140" y1="136" x2="160" y2="168" stroke="#334155" strokeWidth="5" />}
            </svg>
            <div className="mt-3 text-center text-sm text-slate-600">
                {wrongGuesses} / {maxGuesses} wrong guesses
            </div>
        </div>
    );
}

export default HangMan;
