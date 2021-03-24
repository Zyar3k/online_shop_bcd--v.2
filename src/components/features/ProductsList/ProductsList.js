import ProductTile from "../ProductTile/ProductTile";

const ProductsList = ({ products }) => (
  <>
    {products.map((products) => (
      <ProductTile key={products._id} {...products} />
    ))}
  </>
);

export default ProductsList;
