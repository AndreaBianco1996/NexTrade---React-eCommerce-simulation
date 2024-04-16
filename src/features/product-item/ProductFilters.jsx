function ProductFilters({ children }) {
  return (
    <div className="mt-2 h-full min-w-[300px] rounded">
      <h3 className="mb-3 border-b-2 pb-1 text-lg font-semibold">Categories</h3>
      {children}
    </div>
  );
}

export default ProductFilters;
