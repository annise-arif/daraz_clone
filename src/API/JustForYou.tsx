import {useState, useEffect} from 'react';

const JustForYou = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://daraz-server.vercel.app/services')
        .then(res => res.json())
        .then(data => setServices(data))
       }, []);
    return services;
};

export default JustForYou;
