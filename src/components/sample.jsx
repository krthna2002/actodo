import { useLocation } from "react-router-dom";

function Sample(){
    // let store=props.state
    
    let store=useLocation()
    console.log(store.state.passUsername)
    return(
        <>
        <h1>
            haii,,hello {store.state.passUsername}</h1>
            {/* haii,,hello {(store.userName).slice(0,4)}</h1> */}
            </>
    )
}

export default Sample;