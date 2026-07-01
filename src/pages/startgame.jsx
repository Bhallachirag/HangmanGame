import {Link} from "react-router-dom"
import TextInputFormContainer from "../components/TextInputFrom/TextInputFormContainer";

function StartGame(){
    return(
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 px-4 py-10">
            <div className="mx-auto flex w-full max-w-3xl flex-col gap-8">
                <section className="rounded-[32px] bg-slate-950/80 border border-white/10 p-8 shadow-2xl shadow-slate-950/30 backdrop-blur-xl text-center text-white">
                    <span className="inline-flex rounded-full bg-cyan-500/20 px-4 py-1 text-xs uppercase tracking-[0.3em] text-cyan-200">Hangman challenge</span>
                    <h1 className="mt-6 text-5xl font-bold tracking-tight">Start your game</h1>
                    <p className="mt-4 text-slate-300 max-w-2xl mx-auto leading-7">
                        Enter a secret word or phrase so your opponent can guess it. The game hides letters and gives you 6 chances before the hangman is complete.
                    </p>
                </section>

                <div className="rounded-[32px] bg-white p-8 shadow-xl">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <h2 className="text-2xl font-semibold text-slate-900">Create a new game</h2>
                            <p className="text-sm text-slate-600">Type any word or phrase and click submit.</p>
                        </div>
                    </div>
                    <div className="mt-6">
                        <TextInputFormContainer />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StartGame;