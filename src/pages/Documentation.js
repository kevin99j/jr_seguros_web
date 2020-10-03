import React from 'react';

const Documentation = ({ documentation }) => {
    return (
        <section className="ftco-section ftco-no-pt ftco-no-pb ftco-services-2 bg-light">
            <div className="container">
                <div className="row d-flex">
                    <div className="col-md-12 py-5">
                        <div className="py-lg-5">
                            <div className="row justify-content-center pb-5">
                                <div className="col-md-12 heading-section animated bounceInUp ftco_animate">
                                    <h2 className="mb-3"><span>{documentation.title}</span></h2>
                                </div>
                            </div>
                            <div className="row center" style={{backgroundColor: 'white'}}>
                                {
                                    documentation.sections.map((doc, index) => {
                                        return (
                                            <div className="col-md-12 col-lg-12 d-flex align-self-stretch animated ftco_animate" key={index}>
                                                <div className="media block-8 services d-flex">
                                                    <div className="media-body ">
                                                        <h3 className="heading mb-3"><b>{doc.title}</b></h3>
                                                        <div class="row d-flex contact-info mb-3 justify-content-center">
                                                           {
                                                               doc.subsections.map((subsection,index)=>{
                                                                   return (
                                                                    <div class="col-md-6 col-lg-3 d-flex ftco_animate pricing-entry" style={{margin:'2em', padding:'4px'}} key={index}>
                                                                    <div class="align-self-stretch box p-4 text-center bg-light">
                                                                    
                                                                        <h3 class="mb-4">{subsection.title}</h3>
                                                                       {
                                                                           subsection.details.map((detail,index)=>{
                                                                               return( <p key={index}>{detail}</p>)
                                                                           })
                                                                       }
                                                                    </div>
                                                                </div>
                                                                   )
                                                               })
                                                           }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>)
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Documentation;