import { useEffect, useState } from "react";
import { localStorageData } from "../localstorage";
import Chart from 'react-apexcharts'
import { useLoaderData } from "react-router-dom";
const Statistics=()=>{
  
      const storeData=localStorageData(); 
         const data1=storeData.length
       
   const datas=useLoaderData()
   const data2=datas.length
   const data = [
      data1,data2
    ]
     return(
    
   
     <div className="  flex justify-center  lg:justify-center md:justify-center  mt-24  ">
            <Chart 
        type='pie'
        width={350}
        height={350}
        series={data}
        options={{
          labels: [ 'Your Donation','Total Donation'],
          colors: ['#00C49F','#FF444A' ]
        }}
      >

      </Chart>
     </div>   
    )
}
export default Statistics;