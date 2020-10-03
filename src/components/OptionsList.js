import React, { Component } from 'react'
import image from '../assets/images/person_2.jpg'

export default class OptionsList extends Component {
    render() {
        return (
            <div>
                <section className="ftco-section ftco-no-pt ftco-no-pb ftco-services-2 bg-light">
                    <div className="container">
                        <div className="row d-flex">
                            <div className="col-md-7 py-5">
                                <div className="py-lg-5">
                                    <div className="row justify-content-center pb-5">
                                        <div className="col-md-12 heading-section ftco-animate">
                                            <h2 className="mb-3">Welcome to <span>Medex</span></h2>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 col-lg-6 d-flex align-self-stretch ftco-animate">
                                            <div className="media block-6 services d-flex">
                                                <div className="icon justify-content-center align-items-center d-flex"><img src={image} style={{height: '100px'}} alt="pinchi imagen" /></div>
                                                <div className="media-body pl-md-4">
                                                    <h3 className="heading mb-3">Emergency Help</h3>
                                                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-6 d-flex align-self-stretch ftco-animate">
                                            <div className="media block-6 services d-flex">
                                                <div className="icon justify-content-center align-items-center d-flex"><span className="flaticon-ophthalmologist"></span></div>
                                                <div className="media-body pl-md-4">
                                                    <h3 className="heading mb-3">Qualified Doctors</h3>
                                                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-6 d-flex align-self-stretch ftco-animate">
                                            <div className="media block-6 services d-flex">
                                                <div className="icon justify-content-center align-items-center d-flex"><span className="flaticon-flag"></span></div>
                                                <div className="media-body pl-md-4">
                                                    <h3 className="heading mb-3">Location &amp; Directions</h3>
                                                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-6 d-flex align-self-stretch ftco-animate">
                                            <div className="media block-6 services d-flex">
                                                <div className="icon justify-content-center align-items-center d-flex"><span className="flaticon-stethoscope"></span></div>
                                                <div className="media-body pl-md-4">
                                                    <h3 className="heading mb-3">Medical Treatment</h3>
                                                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                     
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
