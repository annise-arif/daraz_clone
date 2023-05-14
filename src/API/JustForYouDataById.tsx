import {useState, useEffect} from 'react';

const JustForYouDataById = (_id: String | undefined) => {
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch(`https://daraz-server.vercel.app/services/${_id}`)
        .then(res => res.json())
        .then(data => setService(data))
       }, [_id]);
    return service;
};

export default JustForYouDataById;