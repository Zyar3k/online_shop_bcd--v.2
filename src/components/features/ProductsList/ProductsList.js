import ProductTile from "../ProductTile/ProductTile";

const ProductsList = ({ products }) => (
  <>
    {products.map((products) => (
      <ProductTile key={products.id} {...products} />
    ))}
  </>
);

export default ProductsList;
