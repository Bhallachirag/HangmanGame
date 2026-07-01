import {Link} from "react-router-dom"
import TextInputFormContainer from "../components/TextInputFrom/TextInputFormContainer";

function StartGame(){
    return(
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 px-4 py-10">
            <div className="mx-auto flex max-w-3xl flex-col gap-8">
                <section className="rounded-[32px] border border-white/10 bg-white/10 p-8 shadow-2xl shadow-slate-950/20 backdrop-blur-xl text-center text-white">
                    <span className="inline-flex rounded-full bg-sky-500/20 px-4 py-1 text-xs uppercase tracking-[0.3em] text-sky-200">Hangman challenge</span>
                    <h1 className="mt-6 text-5xl font-bold tracking-tight">Ready to play?</h1>
                    <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
                        Enter a secret word or phrase and challenge a friend. The game will hide the letters and let you guess until the hangman is complete.
                    </p>
                </section>

                <div className="rounded-[32px] bg-white p-8 shadow-xl">
                    <h2 className="text-2xl font-semibold text-slate-900 mb-4">Start a new game</h2>
                    <TextInputFormContainer />
                </div>
            </div>
        </div>
    )
}

export default StartGame;