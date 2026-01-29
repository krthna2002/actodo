// import { useState } from "react"
function Todocontainer(props){
    
    // let [state, setState] = useState("")
    // let [item, setitem] = useState([
    //     {
    //         id: Date.now(),
    //         task: "good morning"

    //     }
    // ])
    
    function add() {
        console.log(props)
        if(props.state==="") return 
        props.setItem(prev =>
            [
                ...prev,
                {
                    id: Date.now(),
                    task: props.state
                }
            ]
        )
       props.setState("")
    }
    console.log(props.item+"kkkkkkkkkkkkkk")

    //remove
    // let handleRemove = (id) => {
    //     console.log(id)
    //     let removeItem = item.filter(i => i.id !== id)
    //     console.log(removeItem + "remove one")
    //     setitem(removeItem)
    // }

return(
    <div className="flex flex-col gap-3">
                <h1 className="font-bold text-xl">Manage Activities</h1>
                <div className="flex flex-row">
                    <input type="text" onChange={(e) => props.setState(e.target.value)} value={props.state} placeholder="Next Activity?" 
                    className="focus:outline-none border-2 border-black p-2"></input>
                    <button onClick={add} className="bg-black text-white p-2 border-2 border-black">ADD</button>
                </div>
            </div>
)
}
export default Todocontainer