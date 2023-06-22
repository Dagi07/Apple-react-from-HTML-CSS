import applecardlogo from "./images/icons/apple-card-logo.png"
import logo from "./images/icons/logo.png"
import './CSS/card-and-arcade.css'

function Cardandarcade() {
    return (
        <section className="card-and-arcade">
            <div className="card">
                <div className="card-wrapper">
                    <img src={applecardlogo} alt="" />
                    <p id="subhead-price">
                        Get 3% Daily Cash on purchases from Apple using Apple Card.
                    </p>
                    <p className="learnMore">
                        <span className="lm"><a href="#">Learn more </a></span>
                        <span className="buy"><a href="#">Apply now </a></span>
                    </p>
                </div>
            </div>
            <div className="arcade">
                <div className="arcade-wrapper">
                    <h2><img src={logo} alt="" />Arcade</h2>
                    <p id="subhead">Play extraordinary.</p>
                    <p id="subhead">Find it on the App Store.</p>
                    <p className="learnMore">
                        <span className="lm"><a href="#">Learn more </a></span>
                        <span className="buy"
                        ><a href="#">Try it free<sup>2</sup> </a></span
                        >
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Cardandarcade