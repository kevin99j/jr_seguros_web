import React from 'react';
import '../assets/css/animate.css'

const Pricing = () => {
	return (
		<section className="ftco_section" style={{ paddingTop: '5em' }}>
			<div className="row justify-content-center pb-5">
				<div className="col-md-12 heading-section animated bounceInUp ftco_animate">
					<h2 className="mb-3">Nuestros <span>Planes</span></h2>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-md-3 ftco_animate">
						<div className="pricing-entry pb-5 text-center">
							<div>
								<h3 className="mb-4">Basic</h3>
								<p><span className="price">$24.50</span> <span className="per">/ session</span></p>
							</div>
							<ul>
								<li>Diagnostic Services</li>
								<li>Professional Consultation</li>
								<li>Tooth Implants</li>
								<li>Surgical Extractions</li>
								<li>Teeth Whitening</li>
							</ul>
							<p className="button text-center"><a href="#" className="btn btn-primary px-4 py-3">Get Offer</a></p>
						</div>
					</div>
					<div className="col-md-3 ftco_animate">
						<div className="pricing-entry pb-5 text-center">
							<div>
								<h3 className="mb-4">Standard</h3>
								<p><span className="price">$34.50</span> <span className="per">/ session</span></p>
							</div>
							<ul>
								<li>Diagnostic Services</li>
								<li>Professional Consultation</li>
								<li>Tooth Implants</li>
								<li>Surgical Extractions</li>
								<li>Teeth Whitening</li>
							</ul>
							<p className="button text-center"><a href="#" className="btn btn-primary px-4 py-3">Get Offer</a></p>
						</div>
					</div>
					<div className="col-md-3 ftco_animate">
						<div className="pricing-entry active pb-5 text-center">
							<div>
								<h3 className="mb-4">Premium</h3>
								<p><span className="price">$54.50</span> <span className="per">/ session</span></p>
							</div>
							<ul>
								<li>Diagnostic Services</li>
								<li>Professional Consultation</li>
								<li>Tooth Implants</li>
								<li>Surgical Extractions</li>
								<li>Teeth Whitening</li>
							</ul>
							<p className="button text-center"><a href="#" className="btn btn-primary px-4 py-3">Get Offer</a></p>
						</div>
					</div>
					<div className="col-md-3 ftco_animate">
						<div className="pricing-entry pb-5 text-center">
							<div>
								<h3 className="mb-4">Platinum</h3>
								<p><span className="price">$89.50</span> <span className="per">/ session</span></p>
							</div>
							<ul>
								<li>Diagnostic Services</li>
								<li>Professional Consultation</li>
								<li>Tooth Implants</li>
								<li>Surgical Extractions</li>
								<li>Teeth Whitening</li>
							</ul>
							<p className="button text-center"><a href="#" className="btn btn-primary px-4 py-3">Get Offer</a></p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Pricing;