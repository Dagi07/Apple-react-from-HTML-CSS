import './CSS/watch&a-w-studio-sec.css'
import watchlogo from './images/icons/watch-series5-logo.png'

function Watchsec() {
    return (
        <section class="watch-and-a-w-studio-sec">
            <div class="watch">
                <div class="watch-wrapper">
                    <img src={watchlogo} alt="" />
                    <p id="subhead">With the new Always-On Retina display.</p>
                    <p id="subhead-2">You've never seen a watch like this.</p>
                    <p class="learnMore">
                        <span class="lm"><a href="#">Learn more </a></span>
                        <span class="buy"><a href="#">Buy </a></span>
                    </p>
                </div>
            </div>
            <div class="a-w-studio">
                <div class="a-w-studio-wrapper">
                    <h2>Apple Watch Studio</h2>
                    <p id="subhead">Any case. Any band. Any style you want.</p>
                    <p class="learnMore">
                        <span class="lm"><a href="#">Create your style </a></span>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Watchsec