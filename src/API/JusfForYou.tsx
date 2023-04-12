import {useState, useEffect} from 'react';

const JusfForYou = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://daraz-server.vercel.app/services')
        .then(res => res.json())
        .then(data => setServices(data))
       }, []);
    return services;
};

export default JusfForYou;
