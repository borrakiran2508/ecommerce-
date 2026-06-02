function ProductCategories({
  setSelectedCategory,
}) {
  return (
    <div className="category-navbar">
      <button
        onClick={() =>
          setSelectedCategory("all")
        }
      >
        All
      </button>

      <button
        onClick={() =>
          setSelectedCategory(
            "electronics"
          )
        }
      >
        Electronics
      </button>

      <button
        onClick={() =>
          setSelectedCategory(
            "fashion"
          )
        }
      >
        Fashion
      </button>
    </div>
  );
}

export default ProductCategories;