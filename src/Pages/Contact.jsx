import React from 'react';


const Contact = () => {
    return (
        <div>
            {/* <!-- Contact--> */}
            <section className="page-section" id="contact">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Contact Us</h2>
                        <h3 className="section-subheading tex">For Happy Shopping...</h3>
                    </div>
                    <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                        <div className="row align-items-stretch mb-5">
                            <div className="col-md-12">
                                <div className="form-group">
                                    {/* <!-- Name input--> */}
                                    <input className="form-control" id="name" type="text" placeholder="VinAsh" readOnly="true" />
                                </div>
                                <div className="form-group">
                                    {/* <!-- Email address input--> */}
                                    <input className="form-control" id="email" type="email" placeholder="vinash@gmail.com" readOnly="true" />
                                </div>
                                <div className="form-group mb-md-0">
                                    {/* <!-- Phone number input--> */}
                                    <input className="form-control" id="phone" type="tel" placeholder="814*******" readOnly="true" />

                                </div>
                            </div>

                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Contact;