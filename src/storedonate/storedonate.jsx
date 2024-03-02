import { useNavigate } from "react-router-dom"
const Storedonate=({donates})=>{
    const {price,id,picture,title,category,category_bg,card_bg,text_button_bg}=donates
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
    const style5={
        backgroundColor:`${text_button_bg}`, 
  
    }
    const navigate=useNavigate()
    const handleClickButton=()=>{
        navigate(`/dondetail/${id}`)
    }
    return(
        <div >
        <div  className="flex w-full ">
         <img className="w-1/3 h-48 rounded-s-lg" src={picture}alt="voulnteers.png" />
         <div className="p-4 grow w-2/3  " style={style} >
          <button style={style2} className={`text-sm px-2 py-1 rounded-sm font-medium`}>{category}</button>
         <h5 style={style1} className={`font-semibold pt-2 text-xl text-[${text_button_bg}]`}>{title}</h5>
         <p className="font-semibold" style={style1}>{price}</p>
         
         <button onClick={handleClickButton} style={style5} className={` text-white px-5 py-1 rounded-sm mt-5 `}>View Details</button>
         </div>

        </div>
        </div>
    )
}
export default Storedonate