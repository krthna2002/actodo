
// import SideFooter from "./footer2"
import { useState } from "react"
import Todocontainer from "./todocontainer"
import AddTodolist from "./addtodolist"

function Footer() {
    let [state, setState] = useState("")
    // let [check,setCheck] =useState(false);
    
    let [item, setitem] = useState([
        {
            id: Date.now(),
            task: "good morning"
        }
    ])

    let handleRemove=(id)=>{

        console.log(id)
       setitem(item.filter(i=>
        i.id!==id
         
       ))
     
       console.log(item+"length in after remove")
      
    }
    return (
        <div className="flex flex-col gap-10 mt-10 md:flex-row">
            <Todocontainer state={state} setState={setState} item={item} setItem={setitem}></Todocontainer>
        <AddTodolist list={item} setItem={setitem} handleRemove={handleRemove} ></AddTodolist>
        </div>
    )
}

export default Footer