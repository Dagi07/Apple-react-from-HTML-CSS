import applecardlogo from "./images/icons/apple-card-logo.png"
import logo from "./images/icons/logo.png"
import './CSS/card-and-arcade.css'

function Cardandarcade() {
    return (
        <section class="card-and-arcade">
            <div class="card">
                <div class="card-wrapper">
                    <img src={applecardlogo} alt="" />
                    <p id="subhead-price">
                        Get 3% Daily Cash on purchases from Apple using Apple Card.
                    </p>
                    <p class="learnMore">
                        <span class="lm"><a href="#">Learn more </a></span>
                        <span class="buy"><a href="#">Apply now </a></span>
                    </p>
                </div>
            </div>
            <div class="arcade">
                <div class="arcade-wrapper">
                    <h2><img src={logo} alt="" />Arcade</h2>
                    <p id="subhead">Play extraordinary.</p>
                    <p id="subhead">Find it on the App Store.</p>
                    <p class="learnMore">
                        <span class="lm"><a href="#">Learn more </a></span>
                        <span class="buy"
                        ><a href="#">Try it free<sup>2</sup> </a></span
                        >
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Cardandarcade