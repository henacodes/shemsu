import Navbar from "@/components/Navbar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/redux/features/poductsSlice";
export default function index() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <div>
      <Navbar page="products" />
    </div>
  );
}
