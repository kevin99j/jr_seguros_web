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
            "https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    },
    {
        title: "Chamonix",
        subtitle: "France",
        description: "Let your dreams come true",
        image:
            "https://images.unsplash.com/photo-1581836499506-4a660b39478a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    },
    {
        title: "Mimisa Rocks",
        subtitle: "Australia",
        description: "A piece of heaven",
        image:
            "https://images.unsplash.com/photo-1566522650166-bd8b3e3a2b4b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    },
    {
        title: "Four",
        subtitle: "Australia",
        description: "A piece of heaven",
        image:
            "https://images.unsplash.com/flagged/photo-1564918031455-72f4e35ba7a6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    },
    {
        title: "Five",
        subtitle: "Australia",
        description: "A piece of heaven",
        image:
            "https://images.unsplash.com/photo-1579130781921-76e18892b57b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
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