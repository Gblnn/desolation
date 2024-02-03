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
                    
                    <img onLoad={onLoad} style={{width:"100%", height:"100svh", objectFit:"cover", objectPosition:"0% 50%"}} src="/shot.png"/>
        
                }
                
                <div style={{position:"absolute", width:"100%", height:"100%", display:"flex", alignItems:"center", justifyContent:"center", flexFlow:'column', gap:'1rem'}}>
                    
                    {/* <p>Worlds first community-driven development project.</p> */}
                    <div className="desc" style={{gap:"1rem"}}>
                        
                        <h1 className="heading">JOIN THE ADVENTURE.</h1>
                        <p>A collaborative project powered by people like you, for people like you</p>
                        

                        <div></div>

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
                    {/* <p>Project desolation is a collaborative project built by a community of contributors. By becoming a member you can anonymously contribute your vision and ideas and get access to the pre-alpha version of the game and test it for bugs. Your queries collected from the forum will be consolidated and the best ideas will be added in the weekly update.</p>
                    <br/> */}
                    <div className="re" style={{display:"flex", width:"100%"}}>
                    <a href="#desolation">
                                <button className="dark btn">What is it?</button>
                            </a>
                    {/* <button className="white btn">Join Us</button> */}

                    </div>
                    
                </div>
                
            </div>
            <div className="page">

            </div>

        </div>
    )
}