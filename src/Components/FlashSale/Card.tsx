import React from 'react';
type FLASH_SALE_TYPE = {
    id: number;
    img: string;
    title: string;
    new_price: string;
    old_price: string;
    purcent: string;
}[]
const Card = ({img, title, new_price}: FLASH_SALE_TYPE) => {
    return (
        <div className="card w-[11.75rem] rounded-none p-0 m-0 h-[18.125rem] bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes"/></figure>
  <div className="card-body p-3">
    <p className='text-sm text-ellipsis overflow-hidden ...'>{title}</p>
   <span>{new_price}</span>
    
  </div>
</div>
    );
};

export default Card;