import Image from "next/image"
import Button from "./Button"
import {BsPlayFill} from "react-icons/bs"

export default function Banner() {
  return (
    <div className=" bg-primary-color flex justify-between items-center px-10 p-[100px] mb-[-50px]">
        <div className="banner-left p-10">
            <p className="poppinsBold text-5xl ">Enjoy your</p>
            <p className="poppinsBold text-5xl pt-4">online shopping</p>
            <p className="pt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 At, odit ut quaerat corrupti natus vitae. Eligendi labore
                  culpa perferendis quae. At, consectetur officiis? Impedit
                   delectus odit distinctio harum beatae eaque.
            </p>

            <div className="cta flex items-center pt-5">
                <Button customClass={"rounded-3xl mr-5 px-5"}>
                    <span>Get Started</span>
                </Button>
                <Button type={"secondary"} customClass={"rounded-3xl border-2 border-secondary-color"}>
                    <span className="flex justify-center items-center"> 
                        Watch Video
                        <BsPlayFill />
                     </span>
                </Button>
            </div>
        </div>
        <div className="banner-right">
            <Image src={"/imgs/bag.svg"} width={1000} height={1000} />
        </div>
    </div>
  )
}
