import React from 'react';
import '../assets/css/style.css';
import '../assets/css/services.css';
import '../assets/css/animate.css'


const Services = ({services}) => {

    let title = services.title.split(' ');

    return (
        <section className="ftco-section ftco-no-pt ftco-no-pb ftco-services-2 bg-light">
        <div className="container">
         <div className="row d-flex">
          <div className="col-md-12 py-5">
           <div className="py-lg-5">
            <div className="row justify-content-center pb-5">
              <div className="col-md-12 heading-section animated bounceInUp ftco_animate">
                <h2 className="mb-3">{title[0]} <span>{title[1]}</span></h2>
              </div>
            </div>
            <div className="row center">
            { 
                services.servicesList.map((service,index)=> {
                    return( 
                    <div className="col-md-12 col-lg-6 d-flex align-self-stretch animated ftco_animate" key={index}>
                    <div className="media block-8 services d-flex">
                      <div className="icon justify-content-center align-items-center d-flex"><img src={service.icon} style={{height:'40px'}} alt="detalle"/></div>
                      <div className="media-body pl-md-4">
                        <h3 className="heading mb-3">{service.title}</h3>
                        <p>{service.details}</p>
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

export default Services;