function Header(props){
    console.log(props)
    return(
        <div>
            <h1 className="text-2xl font-bold">Hello {(props.val).slice(0,4)}...!</h1>
            <p>I help you manage your activities</p>
        </div>
    )
}

export default Header;