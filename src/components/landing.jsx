import { useLocation } from "react-router-dom"
import Footer from "./footer"
import Section from "./landingcards"
import Header from "./landingheader"


function Landing(){
  let location=useLocation();
  console.log(location)
     return (
    <div className='bg-black p-20 h-screen'>
      <div className='bg-white p-10 rounded-md h-screen'>
    <Header val={location.state.passUsername}></Header>
   <Section></Section>
   <Footer></Footer>
      </div>
    </div>

  )
}
export default Landing