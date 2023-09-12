import servantlogo from "./images/icons/servant-logo.png"
import appletvlogo from "./images/icons/apple-tv-logo.png"
import airpods from "./images/home/air-pods.jpg"
import './CSS/tv-and-airpods.css'

function Tvandairpods() {
    return (
        <section className="tv-and-airpods-sec">
            <div className="tv">
                <div className="tv-wrapper">
                    <img src={appletvlogo} alt="" />
                    <div className="space-container"></div>
                    <img src={servantlogo} alt="" />
                    <p id="trailer">Watch the trailer</p>
                </div>
            </div>
            <div className="airpods">
                <div className="airpods-wrapper">
                    <h2>AirPods Pro</h2>
                    <p id="subhead">Magic like you've never heard</p>
                    <p className="learnMore">
                        <span className="lm"><a href="#">Learn more </a></span>
                        <span className="buy"><a href="#">Buy </a></span>
                    </p>
                </div>
                {/* <img src={airpods} alt="" /> */}
            </div>
        </section>
    )
}

export default Tvandairpods