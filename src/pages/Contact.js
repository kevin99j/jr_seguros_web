import React from 'react';

const Contact = () => {
    return (
        <section class="ftco-section contact-section">
            <div class="container">
            <div className="row justify-content-center pb-5">
                                <div className="col-md-12 heading-section animated bounceInUp ftco_animate">
                                    <h2 className="mb-3"><span>Contactanos</span></h2>
                                </div>
                            </div>
                <div class="row d-flex contact-info mb-5">
                    <div class="col-md-6 col-lg-3 d-flex ftco_animate">
                        <div class="align-self-stretch box p-4 text-center bg-light">
                            <div
                                class="icon d-flex align-items-center justify-content-center"
                            >
                                <span class="flaticon-flag"></span>
                            </div>
                            <h3 class="mb-4">Dirección</h3>
                            <p>198 West 21th Street, Suite 721 New York NY 10016</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3 d-flex ftco_animate">
                        <div class="align-self-stretch box p-4 text-center bg-light">
                            <div
                                class="icon d-flex align-items-center justify-content-center"
                            >
                                <span class="flaticon-phone-call"></span>
                            </div>
                            <h3 class="mb-4">Numero de telefono</h3>
                            <p><a href="tel://+573152852911">+57 315 2852911</a></p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3 d-flex ftco_animate">
                        <div class="align-self-stretch box p-4 text-center bg-light">
                            <div
                                class="icon d-flex align-items-center justify-content-center"
                            >
                                <span class="flaticon-paper-plane"></span>
                            </div>
                            <h3 class="mb-4">Correo electrónico</h3>
                            <p><a href="mailto:jrsegurosysoluciones@gmail.com"><span style={{justifyContent:'flex-start', fontSize: 14}}>jrsegurosysoluciones@gmail.com</span></a></p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3 d-flex ftco_animate">
                        <div class="align-self-stretch box p-4 text-center bg-light">
                            <div
                                class="icon d-flex align-items-center justify-content-center"
                            >
                                <span class="flaticon-world-wide-web-on-grid"></span>
                            </div>
                            <h3 class="mb-4">Instagram</h3>
                            <p><a href="#">jr.segurosysoluciones</a></p>
                        </div>
                    </div>
                </div>
                <div class="row no-gutters block-9 justify-content-center">
                    <div class="col-md-6 order-md-last d-flex">
                        <form action="#" class="bg-light p-5 contact-form">
                            <div class="form-group">
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Nombre"
                                />
                            </div>
                            <div class="form-group">
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Correo electrónico"
                                />
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Telefono" />
                            </div>
                            <div class="form-group">
                                <textarea
                                    name=""
                                    id=""
                                    cols="30"
                                    rows="7"
                                    class="form-control"
                                    placeholder="Mensaje"
                                ></textarea>
                            </div>
                            <div class="form-group">
                                <input
                                    type="submit"
                                    value="Enviar mensaje"
                                    class="btn btn-secondary py-3 px-5"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;