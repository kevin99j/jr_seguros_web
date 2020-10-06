import React from 'react';
import '../assets/css/animate.css'


const Pricing = ({pricing}) => {
	debugger
	let title = pricing.title.split(' ');
	return (
		<section className="ftco_section" style={{ paddingTop: '5em' }}>
			<div className="row justify-content-center pb-5">
				<div className="col-md-12 heading-section animated bounceInUp ftco_animate">
				<h2 className="mb-3">{title[0]} <span>{title[1]}</span></h2>
				</div>
			</div>
			<div className="container">
		
				<div className="row">
					{
						pricing.plans.map((plan,index)=>{
							return(
							<div className="col-md-3 ftco_animate" key={index}>
							<div className="pricing-entry pb-5 text-center">
								<div>
									<h3 className="mb-4">{plan.title}</h3>
									<p><span className="price">${plan.price}</span></p>
								</div>
								<ul>
								{plan.benefits.map((benefit,index)=>{
									return(<li key={index}>{benefit}</li>);
								})}
							
								</ul>
								<p className="button text-center"><a href="#" className="btn btn-primary px-4 py-3">Adquirir</a></p>
							</div>
						</div>)
						})
					}
				</div>
				<div class="col-md-6 col-lg-3 d-flex" >
					<div class="img w-100 d-flex align-self-stretch align-items-center" >
						<img src="./assets/images/portada/IMG-20200908-WA0014.jpg" style={{margin: '10vh', height: '800px'}}  alt="price"/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Pricing;