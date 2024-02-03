
interface Props {
    title:string
    logo?:string
}

export default function Nav(props:Props){
    return(
        <>
        <div className="nav">
            <div style={{display:"flex", marginLeft:'2rem', gap:"0.25rem", alignItems:"center"}}>
                {
                    props.logo?
                    <img src={props.logo} style={{width:"2rem"}}/>
                    :null
                }
                
                <h1 className="title">{props.title}</h1>
                <p style={{fontSize:"1.75rem", marginBottom:"0.5rem", userSelect:'none'}}>&reg;</p>
            </div>
            <div className="nav-items" style={{display:"flex", gap:"3rem", marginRight:"3rem", alignItems:"center"}}>
                <a>About</a>
                <a>Work</a>
                <a>Contact</a>
                {/* <button className="dark btn">Early Access</button> */}
            </div>
                    
        </div>
        </>
    )
}