function ItemNotFound({ products, children }) {
  return (
    <div>
      <h1
        className={
          products?.length
            ? "mx-2 mb-4 border-b border-gray-800 pb-0.5 text-xl text-gray-800"
            : "flex h-[400px] items-center justify-center font-semibold"
        }
      >
        {children}
      </h1>
    </div>
  );
}

export default ItemNotFound;
