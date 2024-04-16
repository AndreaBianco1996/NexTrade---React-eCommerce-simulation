function ProductFilterPrice() {
  return (
    <form className="mt-6">
      <h3 className="mb-3 border-b-2 pb-1 text-lg font-semibold">Price</h3>
      <div className="flex gap-2">
        <input type="text" className="max-w-24 text-center" />
        <span className="font-semibold">-</span>
        <input type="text" className="max-w-24 text-center" />
      </div>
    </form>
  );
}

export default ProductFilterPrice;
