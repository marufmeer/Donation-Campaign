import Header from "../Header/header"
import { Outlet } from "react-router-dom"
const Root=()=>{
    return(
        <div>
 <Header></Header>
 <Outlet></Outlet>
        </div>
    )
}
export default Root