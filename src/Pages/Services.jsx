import React from 'react';


const Services = () => {
    return (
        <div>
            {/* <!-- Services--> */}
            <section className="page-section" id="services">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Services</h2>
                        <h3 className="section-subheading text-muted">Customers Like Us Why</h3>
                    </div>
                    <div className="row text-center">
                        <div className="col-md-4">
                            <span className="fa-stack fa-4x">
                                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                                <i className="fas fa-gift fa-stack-1x fa-inverse"></i>
                            </span>
                            <h4 className="my-3">Gift-Making</h4>
                            <p className="text-muted">Everyone has a gift for something, even if it is the gift of being a good friend.</p>
                        </div>
                        <div className="col-md-4">
                            <span className="fa-stack fa-4x">
                                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                                <i className="fas fa-camera-retro fa-stack-1x fa-inverse"></i>
                            </span>
                            <h4 className="my-3">Photo-Design</h4>
                            <p className="text-muted">The best thing about a picture is that it never changes, even when the people in it do.</p>
                        </div>
                        <div className="col-md-4">
                            <span className="fa-stack fa-4x">
                                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                                <i className="fas fa-id-badge fa-stack-1x fa-inverse"></i>
                            </span>
                            <h4 className="my-3">Embroidery</h4>
                            <p className="text-muted">Love is a canvas furnished by Nature and embroidered by imagination.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services;