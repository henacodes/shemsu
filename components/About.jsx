import Image from "next/image"
import Button from "./Button"
export default function About() {
  return (
    <div className="flex px-[100px] items-center justify-between my-[70px]">
        <div className="about-left">
            <Image src={"/imgs/delivery.svg"} width={500} height={500} />
        </div>
        <div className="about-right ml-10">
            <p className="poppinsBold text-3xl">Welcome to <span className="text-secondary-color">shemsu.com</span></p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat animi tempore repellendus, ea recusandae enim accusamus expedita nulla suscipit? Fuga, </p>
            <p>doloremque? Amet labore sint voluptatem nulla nobis iure. Quibusdam, accusantium! consectetur adipisicing elit. Fugiat animi tempore repellendus,</p>
            <div className="cta flex items-center pt-5">
                <Button customClass={"rounded-3xl mr-5 px-5"}>
                    <span>See Products</span>
                </Button>
                <Button type={"secondary"} customClass={"rounded-3xl border-2 border-secondary-color"}>
                    <span className="flex justify-center items-center"> 
                        Watch Video
                     </span>
                </Button>
            </div>
        </div>
    </div>
  )
}
