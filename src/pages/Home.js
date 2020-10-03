import React, { useEffect, useState } from 'react'
import image from '../assets/images/bg_2.jpg';
import '../assets/css/flaticon.css';
import Services from './Services';
import Carousel from '../components/Carousel';
import Pricing from './Pricing';


const slides = [
    {
        title: "Tu seguridad en las mejores manos",
        subtitle: "Peru",
        description: "Somos una compañía encargada de velar y trabajar por el bienestar y la seguridad social de empleadores, empleados y trabajadores independientes, con el objetivo de garantizar su salud, seguridad social, su futuro y el de su familia",
        image:
            "http://localhost:9000/assets/images/portada/IMG-20200509-WA0163.jpg"
    },
    {
        title: "Chamonix",
        subtitle: "France",
        description: "Let your dreams come true",
        image:
            "http://localhost:9000/assets/images/portada/IMG-20200518-WA0053.jpg"
    },
    {
        title: "Mimisa Rocks",
        subtitle: "Australia",
        description: "A piece of heaven",
        image:
            "http://localhost:9000/assets/images/portada/IMG-20200911-WA0033.jpg"
    },
    {
        title: "Four",
        subtitle: "Australia",
        description: "A piece of heaven",
        image:
            "http://localhost:9000/assets/images/portada/IMG-20200908-WA0014.jpg"
    },
    {
        title: "Five",
        subtitle: "Australia",
        description: "A piece of heaven",
        image:
            "http://localhost:9000/assets/images/portada/IMG-20200509-WA0143.jpg"
    }
];

const Home = ({services}) => {
    const [actual, setActual] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActual(actual => {
                if (actual + 1 < slides.length) {
                    return actual + 1;
                } else {
                   
                }
                return 0
            });
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div style={{ marginLeft: 'auto', marginRight: 'auto' }}>  <div className="slides" >
                <Carousel slide={slides[actual]} offset={0} key={actual} />
            </div>
                <Services services={services} />
                <Pricing />
            </div>
        </div>
    )

}

export default Home;