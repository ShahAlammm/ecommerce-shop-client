import { useContext } from "react";
import { BsEyeFill, BsPlus } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartProvider";

const Product = ({ product }) => {
  const { id, image, category, title, price } = product || {};
  const {addToCart} = useContext(CartContext)
  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              src={image}
              alt="image"
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
            />
          </div>
        </div>
        <div className="absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all">
          <button onClick={()=> addToCart(product, id)}>
            <div className="flex justify-center items-center text-white w-12 h-12 bg-red-500">
              <BsPlus className="text-3xl" />
            </div>
          </button>
          <Link
            to={`/product/${id}`}
            className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl"
          >
            <BsEyeFill />
          </Link>
        </div>
      </div>

      <div className="text-sm capitalize text-gray-500 mb-1">{category}</div>
      <Link to={`/product/${id}`}>
        <h1 className="font-semibold mb-1">{title}</h1>
      </Link>
      <div className="font-semibold mb-1">${price}</div>
    </div>
  );
};

export default Product;
