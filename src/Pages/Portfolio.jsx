import React from 'react';
import Portfolio1 from '../assets/img/portfolio/1.jpg';
import Portfolio2 from '../assets/img/portfolio/2.jpg';
import Portfolio3 from '../assets/img/portfolio/3.jpeg';
import Portfolio4 from '../assets/img/portfolio/4.jpg';
import Portfolio5 from '../assets/img/portfolio/5.jpg';
import Portfolio6 from '../assets/img/portfolio/7.jpeg';
import CloseBtn from '../assets/img/close-icon.svg';


const Portfolio = () => {
    return (
        <div>
            {/* <!-- Portfolio Grid--> */}
            <section className="page-section bg-light" id="portfolio">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Our Work</h2>
                        <h3 className="section-subheading text-muted">Customers are the main reason to Love our service...</h3>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-sm-6 mb-4">
                            {/* <!-- Portfolio item 1--> */}
                            <div className="portfolio-item">
                                <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
                                    <div className="portfolio-hover">
                                        <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img className="img-fluid" src={Portfolio1} alt="..." />
                                </a>
                                <div className="portfolio-caption">
                                    <div className="portfolio-caption-heading">Cloth Warp</div>
                                    <div className="portfolio-caption-subheading text-muted">Gift Packing</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-4">
                            {/* <!-- Portfolio item 2--> */}
                            <div className="portfolio-item">
                                <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal2">
                                    <div className="portfolio-hover">
                                        <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img className="img-fluid" src={Portfolio2} alt="..." />
                                </a>
                                <div className="portfolio-caption">
                                    <div className="portfolio-caption-heading">Chocolate Warp</div>
                                    <div className="portfolio-caption-subheading text-muted">Gift Packing</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-4">
                            {/* <!-- Portfolio item 3--> */}
                            <div className="portfolio-item">
                                <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal3">
                                    <div className="portfolio-hover">
                                        <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img className="img-fluid" src={Portfolio3} alt="..." />
                                </a>
                                <div className="portfolio-caption">
                                    <div className="portfolio-caption-heading">Anniversary Frame</div>
                                    <div className="portfolio-caption-subheading text-muted">Frame Design</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                            {/* <!-- Portfolio item 4--> */}
                            <div className="portfolio-item">
                                <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal4">
                                    <div className="portfolio-hover">
                                        <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img className="img-fluid" src={Portfolio4} alt="..." />
                                </a>
                                <div className="portfolio-caption">
                                    <div className="portfolio-caption-heading">Marriage Frame</div>
                                    <div className="portfolio-caption-subheading text-muted">Frame Design</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-4 mb-sm-0">
                            {/* <!-- Portfolio item 5--> */}
                            <div className="portfolio-item">
                                <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal5">
                                    <div className="portfolio-hover">
                                        <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img className="img-fluid" src={Portfolio5} alt="..." />
                                </a>
                                <div className="portfolio-caption">
                                    <div className="portfolio-caption-heading">Baby Embroidery</div>
                                    <div className="portfolio-caption-subheading text-muted">Embroidery Design</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            {/* <!-- Portfolio item 6--> */}
                            <div className="portfolio-item">
                                <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal6">
                                    <div className="portfolio-hover">
                                        <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img className="img-fluid" src={Portfolio6} alt="..." />
                                </a>
                                <div className="portfolio-caption">
                                    <div className="portfolio-caption-heading">Couple Embroidery</div>
                                    <div className="portfolio-caption-subheading text-muted">Embroidery Design</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Portfolio item 1 modal popup--> */}
            <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="close-modal" data-bs-dismiss="modal"><img src={CloseBtn} alt="Close modal" /></div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="modal-body">
                                        {/* <!-- Project details--> */}
                                        <h2 className="text-uppercase">Cloth Warp</h2>
                                        <p className="item-intro text-muted"></p>
                                        <img className="img-fluid d-block mx-auto" src={Portfolio1} alt="..." />
                                        <p>Style is a way to say who you are without having to speak</p>
                                        <ul className="list-inline">
                                            <li>
                                                <strong>Client: </strong>
                                            XYZ
                                        </li>
                                            <li>
                                                <strong>Category: </strong>
                                            Gift Packing
                                        </li>
                                        </ul>
                                        <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                            <i className="fas fa-xmark me-1"></i>
                                        Close Project
                                    </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Portfolio item 2 modal popup--> */}
            <div className="portfolio-modal modal fade" id="portfolioModal2" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="close-modal" data-bs-dismiss="modal"><img src={CloseBtn} alt="Close modal" /></div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="modal-body">
                                        {/* <!-- Project details--> */}
                                        <h2 className="text-uppercase">Chocolate Warp</h2>
                                        <p className="item-intro text-muted"></p>
                                        <img className="img-fluid d-block mx-auto" src={Portfolio2} alt="..." />
                                        <p>Happiness. Simple as a glass of chocolate or tortuous as the heart. Bitter. Sweet. Alive.</p>
                                        <ul className="list-inline">
                                            <li>
                                                <strong>Client: </strong>
                                            XYZ
                                        </li>
                                            <li>
                                                <strong>Category: </strong>
                                            Gift Packing
                                        </li>
                                        </ul>
                                        <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                            <i className="fas fa-xmark me-1"></i>
                                        Close Project
                                    </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Portfolio item 3 modal popup--> */}
            <div className="portfolio-modal modal fade" id="portfolioModal3" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="close-modal" data-bs-dismiss="modal"><img src={CloseBtn} alt="Close modal" /></div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="modal-body">
                                        {/* <!-- Project details--> */}
                                        <h2 className="text-uppercase">Anniversary Frame</h2>
                                        <p className="item-intro text-muted"></p>
                                        <img className="img-fluid d-block mx-auto" src={Portfolio3} alt="..." />
                                        <p>Wishing a perfect pair a perfectly happy day.</p>
                                        <ul className="list-inline">
                                            <li>
                                                <strong>Client: </strong>
                                            XYZ
                                        </li>
                                            <li>
                                                <strong>Category: </strong>
                                            Frame Design
                                        </li>
                                        </ul>
                                        <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                            <i className="fas fa-xmark me-1"></i>
                                        Close Project
                                    </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Portfolio item 4 modal popup--> */}
            <div className="portfolio-modal modal fade" id="portfolioModal4" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="close-modal" data-bs-dismiss="modal"><img src={CloseBtn} alt="Close modal" /></div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="modal-body">
                                        {/* <!-- Project details--> */}
                                        <h2 className="text-uppercase">Marriage Frame</h2>
                                        <p className="item-intro text-muted"></p>
                                        <img className="img-fluid d-block mx-auto" src={Portfolio4} alt="..." />
                                        <p>A successful marriage requires falling in love many times, always with the same person</p>
                                        <ul className="list-inline">
                                            <li>
                                                <strong>Client: </strong>
                                            XYZ
                                        </li>
                                            <li>
                                                <strong>Category: </strong>
                                            Frame Design
                                        </li>
                                        </ul>
                                        <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                            <i className="fas fa-xmark me-1"></i>
                                        Close Project
                                    </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Portfolio item 5 modal popup--> */}
            <div className="portfolio-modal modal fade" id="portfolioModal5" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="close-modal" data-bs-dismiss="modal"><img src={CloseBtn} alt="Close modal" /></div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="modal-body">
                                        {/* <!-- Project details--> */}
                                        <h2 className="text-uppercase">Baby Embroidery</h2>
                                        <p className="item-intro text-muted"></p>
                                        <img className="img-fluid d-block mx-auto" src={Portfolio5} alt="..." />
                                        <p>With every newborn baby, a little sun rises.”</p>
                                        <ul className="list-inline">
                                            <li>
                                                <strong>Client: </strong>
                                            XYZ
                                        </li>
                                            <li>
                                                <strong>Category: </strong>
                                            Embroidery Design
                                        </li>
                                        </ul>
                                        <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                            <i className="fas fa-xmark me-1"></i>
                                        Close Project
                                    </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Portfolio item 6 modal popup--> */}
            <div className="portfolio-modal modal fade" id="portfolioModal6" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="close-modal" data-bs-dismiss="modal"><img src={CloseBtn} alt="Close modal" /></div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="modal-body">
                                        {/* <!-- Project details--> */}
                                        <h2 className="text-uppercase">Couple Embroidery</h2>
                                        <p className="item-intro text-muted"></p>
                                        <img className="img-fluid d-block mx-auto" src={Portfolio6} alt="..." />
                                        <p>The best thing to hold onto in life is each other.</p>
                                        <ul className="list-inline">
                                            <li>
                                                <strong>Client: </strong>
                                            XYZ
                                        </li>
                                            <li>
                                                <strong>Category: </strong>
                                            Embroidery Design
                                        </li>
                                        </ul>
                                        <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                            <i className="fas fa-xmark me-1"></i>
                                        Close Project
                                    </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;