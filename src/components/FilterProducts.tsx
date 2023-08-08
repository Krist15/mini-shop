export default function FilterProducts() {
  return (
    <div className="flex gap-2">
      Filter Products
      <select
        name="category"
        id="category"
        defaultValue="allProducts"
        className="w-40 border-2 border-black rounded"
        // onChange={filterByCategory}
      >
        <option value="allProducts">All Products</option>
        <option value="womanClothes">Woman clothes</option>
        <option value="menClothes">Mens clothes</option>
      </select>
    </div>
  );
}
