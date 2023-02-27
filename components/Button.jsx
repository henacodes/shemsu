
export default function Button({type, children, customClass}) {
let primaryClass = "bg-secondary-color hover:bg-none hover:border-1 hover:border-seoncdary-color   py-2 px-3 focus:shadow-lg focus:shadow-slate-50  "
let secondaryClass = "bg-none hover:bg-secondary-color border-1 border-secondary-color   py-2 px-3 focus:shadow-lg focus:shadow-slate-50   "


if(type === "secondary"){
    return (
        <button className={secondaryClass +  customClass}>
         {children}
        </button>
       )
 }else{
  
       return (
        <button className={primaryClass + customClass}>
         {children}
        </button>
       )
 }
 
}
