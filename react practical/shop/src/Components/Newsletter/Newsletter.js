import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
    return (
        <>
            <section className="section_padding newsletter">
                <div className="news-contain">
                    <div className="news-item">
                        <h1><strong>
                            Get promotions & updates!</strong></h1>
                        <p>Seamlessly empower fully researched growth strategies and interoperable internal or “organic” sources credibly innovate granular internal .</p>
                        <div class="subscribe_form">
                            <input type="email" placeholder="Enter your mail" />
                            <a href="/" class="btn_1">Subscribe</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Newsletter