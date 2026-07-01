function TextInput({ type = 'text', label, placeholder = "Enter your input here", onChangeHandler }) {
    return (
        <label className="block text-sm font-medium text-slate-700">
            <span className="mb-2 block text-base font-semibold text-slate-900">{label}</span>
            <input
                type={type}
                className="w-full rounded-3xl border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-200"
                placeholder={placeholder}
                onChange={onChangeHandler}
            />
        </label>
    );
}

export default TextInput;