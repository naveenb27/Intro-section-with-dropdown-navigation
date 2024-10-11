import './Section.css'

const Section = () => {
    return (
        <div className="sec-container">
            <div className="container-1">
                <h1>Make remote work</h1>
                <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
                <div>Learn more</div>
                <section className="clients">
                    <img src="./images/client-databiz.svg" alt="databiz" /> 
                    <img className='audio' src="./images/client-audiophile.svg" alt="audiphile" />
                    <img src="./images/client-meet.svg" alt="meet" />
                    <img src="./images/client-maker.svg" alt="marker" />
                </section>
            </div>
            <div className="container-2">
                <img className='Desktop' src="./images/image-hero-desktop.png" alt="desktop image" />
                <img className='Mobile' src="./images/image-hero-mobile.png" alt="desktop image" />
            </div>
            
        </div>
    )
}

export default Section;