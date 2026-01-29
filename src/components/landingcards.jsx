function Section(){
    let day=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Sturday"]
    let CurrentDate=new Date();
    let data=[
        {
            val:"23°",
            item:"Chennai",
            color:"violet"
            
        },
        {
            val:CurrentDate.getDate()+" "+day[CurrentDate.getDay()],
            //  val:day[new Date().getDay()],
            item:CurrentDate.getHours()+":"+CurrentDate.getMinutes()+":"+CurrentDate.getSeconds(),
            color:"blue"
        },
        {
            val:"Built Using",
            item:"React",
            color:"green"
        }
    ]
    return(
<div className="mt-10 flex flex-wrap gap-10 md:flex-nowrap">
    {
data.map((d,index)=>
    <div style={{backgroundColor:d.color}} key={index}className="grow basis-1/2 text-center align-center p-5 rounded-md">
        <h1 className="font-bold text-2xl">{d.val}</h1>
        <p>{d.item}</p>
    </div>
)
    }
</div>
    )
}

export default Section