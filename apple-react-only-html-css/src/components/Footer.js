import './CSS/footer.css'
import uslogo from "./images/icons/16.png"

function Footer() {
    return (
        <footer>
            <div class="bg-color">
                <div class="footer-wrapper">

                    <p class="list">
                        1. Trade in: Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Odit doloremque fuga, minus voluptatum adipisci doloribus
                        aperiam? Vero eius, sit, dolorum quidem quo quibusdam dignissimos ut
                        dolor consectetur architecto odio officia sunt enim veritatis aut
                        veniam unde dolore odit ab. Doloribus, mollitia nesciunt cumque
                        dolore temporibus totam, recusandae assumenda sapiente accusantium
                        odio itaque deleniti ipsam quisquam adipisci expedita quod eligendi
                        doloremque quo laudantium necessitatibus repellendus! Sed neque nam
                        quia nesciunt ducimus! Officiis dolore, maxime aliquid hic itaque
                        sapiente at odit doloremque corrupti vitae fuga ipsam ad consequatur
                        suscipit dicta praesentium perspiciatis aut, quia eligendi veniam?
                        Totam obcaecati corporis doloribus quos fugiat? Animi pariatur
                        eligendi deleniti blanditiis quibusdam sequi sapiente at nobis quae
                        iusto laboriosam iure quia, voluptatibus assumenda vel aliquid.
                        Quos, asperiores aspernatur dignissimos consequatur quam minus et
                        voluptas quisquam autem, nobis eius iusto! Dolore consequatur dicta
                        eligendi voluptatum officia repellendus autem? Accusantium unde
                        velit iste cumque officia! Fugit, ut perferendis?
                    </p>
                    <p class="list">
                        2. $4.99/month Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Nisi, dolore!
                    </p>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
                        dicta in quam, cupiditate rerum minima!
                    </p>
                    <hr />
                    <div class="flex-wrapper">
                        <div>
                            <h4>Shop and Learn</h4>
                            <p>Mac</p>
                            <p>iPad</p>
                            <p>iPhone</p>
                            <p>Watch</p>
                            <p>TV</p>
                            <p>Music</p>
                            <p>AirPods</p>
                            <p>HomePod</p>
                            <p>iPod touch</p>
                            <p>Accessories</p>
                            <p>Gift Cards</p>
                        </div>
                        <div>
                            <div>
                                <h4>Services</h4>
                                <p>Mac</p>
                                <p>iPad</p>
                                <p>iPhone</p>
                                <p>Watch</p>
                                <p>TV</p>
                                <p>Music</p>
                            </div>

                            <div>
                                <h4>Account</h4>
                                <p>Mac</p>
                                <p>iPad</p>
                                <p>iPhone</p>
                            </div>
                        </div>
                        <div>
                            <h4>Apple Store</h4>
                            <p>Mac</p>
                            <p>iPad</p>
                            <p>iPhone</p>
                            <p>Watch</p>
                            <p>TV</p>
                            <p>Music</p>
                            <p>AirPods</p>
                            <p>HomePod</p>
                            <p>iPod touch</p>
                            <p>Accessories</p>
                            <p>Gift Cards</p>
                        </div>
                        <div>
                            <div>
                                <h4>For Business</h4>
                                <p>Mac</p>
                                <p>iPad</p>
                            </div>
                            <div>
                                <h4>For Education</h4>
                                <p>Mac</p>
                                <p>iPad</p>
                            </div>
                            <div>
                                <h4>For Healthcare</h4>
                                <p>Mac</p>
                                <p>iPad</p>
                                <p>iPhone</p>
                            </div>
                            <div>
                                <h4>For Government</h4>
                                <p>Mac</p>
                                <p>iPad</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h4>Apple Values</h4>
                                <p>Mac</p>
                                <p>iPad</p>
                                <p>iPhone</p>
                                <p>Watch</p>
                                <p>TV</p>
                                <p>Music</p>
                            </div>
                            <div>
                                <h4>About Apple</h4>
                                <p>Mac</p>
                                <p>iPad</p>
                                <p>iPhone</p>
                                <p>Watch</p>
                                <p>TV</p>
                                <p>Music</p>
                            </div>
                        </div>
                    </div>
                    <p class="fade">
                        More ways to shop: <a href="#">Find an Apple Store</a> or
                        <a href="#">other retailer</a> near you. Or call 1-800-MY-APPLE.
                    </p>
                    <hr />
                    <p class="fade">
                        Copyright 2019 Apple Inc. All rights reserved.
                        <span class="terms-container">
                            <span class="terms">Privacy Policy</span> |
                            <span class="terms">Terms of Use</span> |
                            <span class="terms">Sales and Refunds</span> |
                            <span class="terms">Legal</span> |
                            <span class="terms">Site Map</span>
                        </span>

                        <span class="flag"
                        ><img src={uslogo} alt="" /> United States</span
                        >
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer