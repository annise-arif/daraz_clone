import {useState, useEffect} from 'react';

export interface Service {
    _id: number
    img: string
    title: string
    new_price: number
    old_price: number
    purcent: string
    stars: number
    reviews: number
  }
const JustForYouDataById = (_id: String | undefined) => {
    const [service, setService] = useState<Service[]>([]);
    useEffect(() => {
        fetch(`https://daraz-server.vercel.app/services/${_id}`)
        .then(res => res.json())
        .then(data => setService(data))
       }, [_id]);
    return service;
};

export default JustForYouDataById;