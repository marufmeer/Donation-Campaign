
const localStorageData=()=>{
    const getlocalData=localStorage.getItem('applications');
    if(getlocalData){
        return JSON.parse(getlocalData)
    }
    return [];
}

const savedLocalData=id=>{
    const savedData=localStorageData()
    const donateData=savedData.find(savedId=>savedId===id)
    if(!donateData){
      savedData.push(id)
    localStorage.setItem('applications',JSON.stringify(savedData))   
    }
    
}
export {localStorageData, savedLocalData}