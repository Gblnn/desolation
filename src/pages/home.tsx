import Nav from "../components/nav";


export default function Home() {
    // const [loaded, setloaded] = useState(false)

    const onLoad = () =>{
        // setloaded(true)
    }

    return(
        <div className="container">
            <div className="page">
                <Nav title="Dreamstate"/>
                {
                    
                    <img onLoad={onLoad} style={{width:"100%", height:"100svh", objectFit:"cover"}} src="/shot.png"/>
        
                }
                
                <div style={{position:"absolute", width:"100%", height:"100%", display:"flex", alignItems:"center", justifyContent:"center", flexFlow:'column', gap:'1rem'}}>
                    
                    {/* <p>Worlds first community-driven development project.</p> */}
                    <div className="desc" style={{gap:"1rem"}}>
                        
                        <h1 className="heading">JOIN THE ADVENTURE.</h1>
                        <p>World's first community collaborative development project.</p>

                        <br/>

                        <div style={{display:'flex', gap:"1rem"}}>

                            <a href="#desolation">
                                <button className="dark btn">Learn More</button>
                            </a>

                            <a href="#desolation">
                                <button className="white btn">Join Us</button>
                            </a>
                    
                        </div>
                    
                    </div>
                    
                    
                </div>
                
            </div>
            <div id="desolation" className="page">
                <div className="desc" style={{display:'flex', gap:'1rem', flexFlow:'column', alignItems:'center'}}>
                    <h1 className="subheading">PROJECT DESOLATION</h1>
                    <p>Project desolation is a collaborative project built by the community of contributors. You can participate in the development process while at the same time </p>
                    <br/>
                    <div className="re" style={{display:"flex", width:"100%"}}>
                    <a href="#desolation">
                                <button className="dark btn">I still dont get it</button>
                            </a>
                    {/* <button className="white btn">Join Us</button> */}

                    </div>
                    
                </div>
                
            </div>

        </div>
    )
}