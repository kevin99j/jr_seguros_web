import React, { useState } from 'react';
import image from '../assets/images/dept-1.jpg';

const Benefits = ({ benefits }) => {
    let title = benefits.title.split(' ');

    const [benefitIndex, setBenefitIndex] = useState(0);
    const showBenefit = () => {
        let benefit = {title: "",
        icon: "",
        details: []}
        if(benefits.benefitsList.length>0){
            benefit = benefits.benefitsList[benefitIndex];
        }
       
        return(
            <div className="col-md-7 text pl-md-4">
            <h3><a href="#">{benefit.title}</a></h3>
            <ul>
                {
                    benefit.details.map((detail,index)=>{
                        return(<li key={index}><span className="fa fa-check"></span>{detail}</li>)
                    })
                }
               
            </ul>
        </div>
        )
    }



    return (
        <section className="ftco-section">
            <div className="container">
                <div className="row justify-content-center mb-5 pb-2">
                <div className="row justify-content-center pb-5">
              <div className="col-md-12 heading-section animated bounceInUp ftco_animate">
                <h2 className="mb-3">{title[0]} <span>{title[1]}</span></h2>
              </div>
            </div>
                </div>
                <div className="row tabulation mt-4 ftco_animate">
                    <div className="col-md-3">
                        <ul className="nav nav-pills nav-fill d-block w-100">
                            {
                                benefits.benefitsList.map((benefit, index) => {
                                    return (
                                        <li className="nav-item text-left benefits_list" key={index} onClick={() => setBenefitIndex(index)}>
                                            <a className="nav-link active d-flex align-items-centere py-4">
                                                <span className="mr-3"> <img src={benefit.icon} style={{height:'40px'}} alt="detalle"/> </span> <span>{benefit.title}</span></a>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>

                    <div className="col-md-9">
                        <div className="tab-content pt-4 pt-md-0 pl-md-3">
                            <div className="tab-pane container p-0 active" id="services-1">
                                <div className="row">
                                    <div className="col-md-5 img" style={{ backgroundImage: 'url(' + image + ')' }}></div>
                                   {
                                       showBenefit()
                                   }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Benefits;