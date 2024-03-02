import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { localStorageData } from "../localstorage";
import { useEffect, useState } from "react";
import Storedonate from "../storedonate/storedonate";
const Donation=()=>{
      
    
      const donationData=useLoaderData()
      console.log(donationData)  
      
    const[dataDonate,setDataDonate]=useState([]) 
    const[hide,setHide]=useState(4) 
   
  useEffect(()=>{
  const data= localStorageData()
    if(donationData.length>0){
        const storedData=[];
        for(const id of data){
            const applied=[...donationData].find(donation=>donation.id===id)
            if(applied){
                storedData.push(applied)
              } 
       }
       
       
        setDataDonate(storedData)     
            
           
      
     
       }
  },[])
  

  

    return(
        <div className="mt-20 mb-20">
        <div className="grid mx-10 md:mx-20 lg:grid-cols-2 lg:mx-36 gap-5 ">
        
       {
        dataDonate.slice(0,hide).map(donates=><Storedonate donates={donates}></Storedonate>)
       }
        </div>
        <div className={hide===dataDonate.length?'hidden':'text-center'}>
         <button onClick={()=> setHide(dataDonate.length)} className="bg-[#009444] text-white px-4 py-2 rounded-lg mt-10 text center " >See All</button>  
        </div>
        
        </div>
    )
}
export default Donation;