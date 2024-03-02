import { useNavigate } from "react-router-dom"
const Donate=({donate})=>{
    const {id,picture,title,category,category_bg,card_bg,text_button_bg}=donate
    const navigate=useNavigate()
   const style={
        backgroundColor:`${card_bg}`
   }
    const style1={
        color:`${text_button_bg}`,
       
    }
    const style2={
        backgroundColor:`${category_bg}`, 
        color:`${text_button_bg}`
    }
   const handleClick=()=>{
       navigate(`/dondetail/${id}`)
   }
    return(
        <div onClick={handleClick} className="flex flex-col ">
         <img className="lg:w-80 h-48 rounded-t-lg" src={picture}alt="voulnteers.png" />
         <div className="p-4 grow" style={style} >
          <button style={style2} className={`text-sm px-2 py-1 rounded-sm font-medium`}>{category}</button>
         <h5 style={style1} className={`font-semibold pt-2 text-xl text-[${text_button_bg}]`}>{title}</h5>
         </div>

        </div>
    )
}
export default Donate