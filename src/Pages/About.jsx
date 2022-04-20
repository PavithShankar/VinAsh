import React from 'react';
import About1 from '../assets/img/about/1.jpg';
import About2 from '../assets/img/about/2.jpg';
import About3 from '../assets/img/about/3.jpg';
import About4 from '../assets/img/about/4.jpg';


const About = () => {
    return (
        <div>
            {/* <!-- About--> */}
            <section className="page-section" id="about">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">About</h2>
                        <h3 className="section-subheading text-muted">Our business has to be involving, it has to be fun, and it has to exercise Our team creative.</h3>
                    </div>
                    <ul className="timeline">
                        <li>
                            <div className="timeline-image"><img className="rounded-circle img-fluid" src={About1} alt="..." /></div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>2019-2020</h4>
                                    <h4 className="subheading">Our Humble Beginnings</h4>
                                </div>
                                <div className="timeline-body"><p className="text-muted">.....................</p></div>
                            </div>
                        </li>
                        <li className="timeline-inverted">
                            <div className="timeline-image"><img className="rounded-circle img-fluid" src={About2} alt="..." /></div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>January 2020</h4>
                                    <h4 className="subheading">An Gift-Making Start</h4>
                                </div>
                                <div className="timeline-body"><p className="text-muted">..................... </p></div>
                            </div>
                        </li>
                        <li>
                            <div className="timeline-image"><img className="rounded-circle img-fluid" src={About3} alt="..." /></div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>March 2020</h4>
                                    <h4 className="subheading">Photo-Design</h4>
                                </div>
                                <div className="timeline-body"><p className="text-muted">.....................</p></div>
                            </div>
                        </li>
                        <li className="timeline-inverted">
                            <div className="timeline-image"><img className="rounded-circle img-fluid" src={About4} alt="..." /></div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>December 2021</h4>
                                    <h4 className="subheading">Embroidery</h4>
                                </div>
                                <div className="timeline-body"><p className="text-muted">.....................</p></div>
                            </div>
                        </li>
                        <li className="timeline-inverted">
                            <div className="timeline-image">
                                <h4>
                                    Be Part
                                <br />
                                Of Our
                                <br />
                                Story!
                            </h4>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default About;