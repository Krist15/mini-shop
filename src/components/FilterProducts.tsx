import useProducts from '../hooks/useProducts';

export default function FilterProducts() {
  const { products, setProducts } = useProducts();

  const filterByCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;

    if (setProducts && value === 'womanClothes') {
      setProducts(
        products.filter(
          (product) => product.category.toLowerCase() === "women's clothing"
        )
      );
    }
    if (setProducts && value === 'menClothes') {
      setProducts(
        products.filter(
          (product) => product.category.toLowerCase() === "men's clothing"
        )
      );
    }
  };

  return (
    <div className="flex gap-2">
      Filter Products
      <select
        name="category"
        id="category"
        defaultValue="allProducts"
        className="w-40 border-2 border-black rounded"
        onChange={filterByCategory}
      >
        <option value="allProducts">All Products</option>
        <option value="womanClothes">Woman clothes</option>
        <option value="menClothes">Mens clothes</option>
      </select>
    </div>
  );
}
