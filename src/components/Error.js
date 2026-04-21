import { useRouteError } from "react-router-dom";


const Error =()=>{
    const error = useRouteError();
    return(
        <div>
            <h1>OOPs!!!!!!</h1>
            <p>{error.statusText || error.message}</p> 
        </div>
    )
}

export default Error;