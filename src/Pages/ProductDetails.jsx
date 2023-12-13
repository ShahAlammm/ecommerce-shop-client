import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../Context/ProductProvider";
import { CartContext } from "../Context/CartProvider";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  if(!product){
    return <section className="h-screen flex justify-center items-center">Loading.....</section>
  }

  return <div></div>;
};

export default ProductDetails;
