import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Logo from '../assets/images/principalLogo.png'
class Header extends Component {

    state = [
        {
            name: 'INICIO',
            isActive: true,
            to: '/'
        },
        {
            name: 'SERVICIOS',
            isActive: false,
            to: '/services'
        },
        {
            name: 'PLANES',
            isActive: false,
            to: '/pricing'
        },
        {
            name: 'BENEFICIOS',
            isActive: false,
            to: '/benefits'
        },
        {
            name: 'DOCUMENTACIÓN',
            isActive: false,
            to: '/'
        },
        {
            name: 'CONTACTENOS',
            isActive: false,
            to: '/'
        }
    ]


    componentWillMount() {

        this.unlisten = this.props.history.listen((location, action) => {
            console.log(location)
            console.log("on route change");
            let stit = this.state.find(state =>(state.to === location.pathname));
            stit.isActive = true;
            this.state.forEach(state => {
                if(state !== stit){
                    state.isActive = false;
                }
            });
        });
    }

    render() {
        return (
            <div>
                <div className="py-1 top">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm text-center text-md-left mb-md-0 mb-2 pr-md-4 d-flex topper align-items-center">
                                <p className="mb-0 w-100">
                                    <span className="fa fa-paper-plane"></span>
                                    <span className="text">jrsegurosysoluciones@gmail.com</span>
                                </p>
                            </div>
                            <div className="col-sm justify-content-center d-flex mb-md-0 mb-2">
                                <div className="social-media">
                                    <p className="mb-0 d-flex">
                                        <a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-facebook"><i className="sr-only">Facebook</i></span></a>
                                        <a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-twitter"><i className="sr-only">Twitter</i></span></a>
                                        <a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-instagram"><i className="sr-only">Instagram</i></span></a>
                                        <a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-dribbble"><i className="sr-only">Dribbble</i></span></a>
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="py-3">
                    <div className="container">
                        <div className="row d-flex align-items-start align-items-center px-3 px-md-0">
                            <div className="col-md-4 d-flex mb-2 mb-md-0">
                                <a className="navbar-brand d-flex align-items-center" href="index.html"><img src={Logo} alt="jr seguros y soluciones" style={{ height: '100px' }} /></a>
                            </div>
                            <div className="col-md-4 d-flex topper mb-md-0 mb-2 align-items-center">
                                <div className="icon d-flex justify-content-center align-items-center">
                                    <span className="fa fa-map"></span>
                                </div>
                                <div className="pr-md-4 pl-md-3 pl-3 text">
                                    <p className="con"><span>Llamanos</span> <span>+1 234 456 78910</span></p>
                                    <p className="con">Call Us Now 24/7 Customer Support</p>
                                </div>
                            </div>
                            <div className="col-md-4 d-flex topper mb-md-0 align-items-center">
                                <div className="icon d-flex justify-content-center align-items-center"><span className="fa fa-paper-plane"></span>
                                </div>
                                <div className="text pl-3 pl-md-3">
                                    <p className="hr"><span>Nuestra sede</span></p>
                                    <p className="con">198 West 21th Street, Suite 721 New York NY 10016</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark ftco-navbar-light" id="ftco-navbar">
                    <div className="container d-flex align-items-center">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="fa fa-bars"></span> Menu
			</button>
                        <div className="collapse navbar-collapse" id="ftco-nav">
                            <ul className="navbar-nav m-auto">
                                {
                                    this.state.map((detail,index)=>{
                                        return(
                                            <li className={`nav-item ${detail.isActive ? 'active': ''}`} key={index} id="/"><Link className="nav-link" to={detail.to}>{detail.name}</Link></li>
                                        )
                                    })
                                }

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}


export default withRouter(Header);