import { useRouteError } from "react-router-dom"
import { Link } from "react-router-dom"
import image from '../assets/fo.jpg'
const Errorpage=()=>{
    // const error=useRouteError()
 
    return(
        <div className=" text-center mt-36   flex flex-col items-center justify-center  mx-36 " >
       <div className="">
        <img className="w-52" src={image} alt="" srcset="" />
        </div>
        <div className="me-10">
       <p className="text-6xl font-extrabold pt-2">404</p>
       <p className="text-xl pt-2">not found</p>
            </div>
            <Link to='/'><button className="px-5 py-2 bg-lime-600 text-white rounded-sm me-10 mt-2 ">Go Back</button></Link>
            </div>
    )
}
export default Errorpage