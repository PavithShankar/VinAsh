import React from 'react';
import Team1 from '../assets/img/team/1.jpg';
import Team2 from '../assets/img/team/2.jpg'
import Team3 from '../assets/img/team/3.jpg'

const Team = () => {
    return (
        <div>
            {/* <!-- Team--> */}
            <section className="page-section bg-light" id="team">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                        <h3 className="section-subheading text-muted">Talent wins games, but teamwork and intelligence win championships.</h3>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="team-member">
                                <img className="mx-auto rounded-circle" src={Team1} alt="..." />
                                <h4>Gift Packing Team</h4>
                                <p className="text-muted">.....................</p>
                                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Twitter Profile"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Facebook Profile"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand LinkedIn Profile"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="team-member">
                                <img className="mx-auto rounded-circle" src={Team2} alt="..." />
                                <h4>Photo Design Team</h4>
                                <p className="text-muted">.....................</p>
                                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Twitter Profile"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Facebook Profile"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen LinkedIn Profile"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="team-member">
                                <img className="mx-auto rounded-circle" src={Team3} alt="..." />
                                <h4>Embroidery Team</h4>
                                <p className="text-muted">.....................</p>
                                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Twitter Profile"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Facebook Profile"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker LinkedIn Profile"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center"><p className="large text-muted"></p></div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Team;