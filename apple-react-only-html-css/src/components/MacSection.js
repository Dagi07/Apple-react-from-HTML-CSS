import maclaptop from "./images/home/mac-laptop.jpg"
import "./CSS/mac.css"

function MacSection() {
    return (
        <section className="mac-sec">
            <div className="mac-pro-wrapper">
                <p>16-inch model</p>
                <h2>MacBook Pro</h2>
                <p>The best for the brightest</p>
                <p className="learnMore">
                    <span className="lm"><a href="#">Learn more </a></span>
                    <span className="buy"><a href="#">Buy </a></span>
                </p>
                <div className="mac-img-wrapper">
                    <img src={maclaptop} alt="" />
                </div>
            </div>
        </section>
    )
}

export default MacSection