
import { useState } from 'react';
import './home.css'
import { useEffect } from 'react';
import Donate from '../Donate/donate';
import {  useNavigate, useRouteError } from 'react-router-dom';

const Home=()=>{
    const [donatedata,setDonatedata]=useState([])
    const [datas,setDatas]=useState([])
  

  
   

    
    const [text,setText]=useState()
    const [click,setClick]=useState(text)
    useEffect(()=>{
     fetch('data.json')
     .then(res=>res.json())
     .then(data=>{setDonatedata(data)
         setDatas(data)})      
  
      
    
    },[])
   
    const handleChangeClick=e=>{
          e.preventDefault()
        setText(e.target.value)

      
      
        
    }
     const handleClickButton=()=>{
        setClick(text)

     
      
   
    
     
      
   if(click==='Health'){
    const health=donatedata.filter(donate=>donate.category==='Health')
 setDatas(health)
}
 

else if(click==='Education'){
    const education=donatedata.filter(donate=>donate.category==='Education')
    setDatas(education)
 }
else if(click==='Clothing'){
    const clothing=donatedata.filter(donate=>donate.category==='Clothing')
    setDatas(clothing)
 }
else if(click==='Food'){
    const food=donatedata.filter(donate=>donate.category==='Food')
    setDatas(food)
 }


 

 
    }
    return(
      <div className='mb-28'>
        <div className='bg  ' >
   
        <div className='z flex flex-col items-center justify-center'> 
           <h1 className=' text-3xl text-center lg:text-5xl md:text-4xl pt-16  lg:pt-32 md:pt-20 font-semibold   '>I Grow By Helping People In Need</h1>
           <div className=' mt-16 lg:mt-10 md:mt-10    '>
            <input onChange={handleChangeClick} className='p-3 font-extralight bg-white text-sm lg:w-80 md:w-52 w-36 border-y-2 border-s-2 border-[#DEDEDE] outline-none' type="text" placeholder='Search here....' name="name"   />
            <input onClick=
                {handleClickButton}
                
  className='bg-[#FF444A] text-white px-3 py-3 md:py-3 md:px-5 lg:py-3 lg:px-6 rounded-r-lg' type="button" value="Search" />   
                   
                 
                   
                      
                                                  
            
               
          
             </div>
             </div>
             </div>
             <div className=' grid grid-cols-1 mx-10  md:grid-cols-2 md:mx-20  lg:grid-cols-4 gap-5 lg:mx-28 mt-64  '>
             {   
                 datas.map(donate=><Donate donate={donate}></Donate>)
                }
             </div>
       
          </div>
      
    )
}
export default Home;