function Button({ onClick, children }) {
  return (
    <button
      className="mt-auto rounded-full bg-violet-600 px-5 py-3 text-sm text-violet-100 transition hover:bg-violet-500"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
