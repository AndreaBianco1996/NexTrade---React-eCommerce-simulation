function OptionsSort({ value, label }) {
  return (
    <>
      <option value={value} className="text-sm">
        {label}
      </option>
    </>
  );
}

export default OptionsSort;
