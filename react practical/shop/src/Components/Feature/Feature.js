import React from 'react'
import './Feature.css'
import feature1 from '../../images/feature_icon_1.svg'
import feature2 from '../../images/feature_icon_2.svg'
import feature3 from '../../images/feature_icon_3.svg'

import feature4 from '../../images/feature_icon_4.svg'

const Feature = () => {
    return (
        <>
            <section className="section_padding feature-section" >
                <div className="feature">
                    <div className="feature-top">
                        <div className="left-feature">
                            <h3>
                                Credibly innovate granular internal or organic sources whereas standards.
                            </h3>
                        </div>
                        <div className="right-feature">
                            <p>
                                Seamlessly empower fully researched growth strategies and interoperable internal or “organic” sources. Credibly innovate granular internal or “organic” sources whereas high standards in web-readiness.
                            </p>
                        </div>
                    </div>
                    <div className="feature-box ">
                        <div className="box-items">
                            <img src={feature1} alt="/" />
                            <h4>Credit Card Support</h4>
                        </div>

                        <div className="box-items">
                            <img src={feature2} alt="/" />
                            <h4>Online Order</h4>
                        </div>
                        <div className="box-items">
                            <img src={feature3} alt="/" />
                            <h4>Free Delivery</h4>
                        </div>
                        <div className="box-items">
                            <img src={feature4} alt="/" />
                            <h4>Product with Gift</h4>
                        </div>

                    </div>
                </div>

            </section>
        </>
    )
}

export default Feature