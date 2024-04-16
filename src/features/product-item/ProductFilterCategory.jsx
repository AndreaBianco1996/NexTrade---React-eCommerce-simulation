function ProductFilterCategory({ category, isCheck }) {
  return (
    <div className="mb-2 flex items-center gap-2">
      <input
        type="radio"
        id={category + "ID"}
        name="category"
        value={category}
        onChange={(e) => isCheck(category, e.target.checked)}
      />
      <label className="capitalize" htmlFor={category + "ID"}>
        {category}
      </label>
    </div>
  );
}

export default ProductFilterCategory;
