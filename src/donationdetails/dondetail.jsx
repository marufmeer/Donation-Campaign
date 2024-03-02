import { useLoaderData, useParams } from "react-router-dom"
import Don from "../don/don"
import './dondetail.css'
import { savedLocalData } from "../localstorage"
const Dondetail=()=>{
   const datas=useLoaderData()
 
   const {id}=useParams()
  

   
  const donatedata=datas.find(data=>data.id===id)
   const{description,bio,price,text_button_bg,rectangle} =donatedata
   const style={
     backgroundColor:`${text_button_bg}`
   }
   const handleButtonClick=()=>{
    savedLocalData(id)
  
   }
   
   
  
    return(
        <div className=" mx-10 lg:mx-36 md:mx-20  mt-20 mb-28 ">
        <div className="bgimage">
            <img className="w-full h" src={rectangle} alt="pictures" />
         <div className="overlay overlay_1 p-5">
                <button onClick={handleButtonClick} style={style} className="px-6 py-2 text-white rounded-md">
                  Donate {price}
                </button>
                </div>
                
                
           </div>
          <div className="mt-12">
          <h4 className="text-4xl font-bold ">{bio}</h4>
          <p className="text-[#857979] text-base pt-6">{description}</p>
          </div>
         
        
 </div>   )
}
export default Dondetail