import {MdDeliveryDining} from "react-icons/md"
import {RiRefund2Line} from "react-icons/ri"
import {MdSentimentVerySatisfied} from "react-icons/md"
export default function Features() {
  return (
    <div className=" bg-[#27385e] flex items-center justify-between mx-[200px] p-6 rounded-md shadow-xl">
        <div className="flex items-center flex-col">
            <span><MdDeliveryDining size={"2em"} color="#38bdf8" /></span>
            <span>Fast free Delivey</span>
        </div>
        <div className="flex items-center flex-col">
            <span><RiRefund2Line size={"2em"} color="#38bdf8"/></span>
            <span>Easy Refund Policy</span>
        </div>
        <div className="flex items-center flex-col">
            <span><MdSentimentVerySatisfied size={"2em"} color="#38bdf8" /></span>
            <span>Great Satisfaction</span>
        </div>
    </div>
  )
}
