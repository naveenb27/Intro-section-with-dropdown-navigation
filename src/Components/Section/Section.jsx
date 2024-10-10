import './Section.css'

const Section = () => {
    return (
        <div className="sec-container">
            <div className="container-1">
                <h1>Make remote work</h1>
                <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
                <div>Learn more</div>
            </div>
            <div className="container-2">
                <img className='Desktop' src="./src/assets/images/image-hero-desktop.png" alt="desktop image" />
                <img className='Mobile' src="./src/assets/images/image-hero-mobile.png" alt="desktop image" />
            </div>
        </div>
    )
}

export default Section;