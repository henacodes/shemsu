
import {ImCart} from "react-icons/im"
import {FaShoppingCart} from "react-icons/fa"
import Button from "./Button"
export default function Navbar({page}) {

  return (
    <nav className=" bg-primary-color flex justify-between items-center p-5 px-10">
      <p className="poppinsBold text-xl">Shemsu</p>

      <ul className="flex justify-between items-center">
        <li className={"ml-10" + (!page ? "underline text-secondary-color" : "")}>Home</li>
        <li className={"ml-10"  }>Products</li>
        <li className={"ml-10"  }>About</li>
        <li className={"ml-10"  }> <FaShoppingCart color="#38bdf8" /> </li>
        <li className={"ml-10"  }> <Button customClass={"text-primary-color"}><span>Sign Up</span></Button> </li>
      </ul>
    </nav>
  )
}
