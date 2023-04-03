import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { AiOutlineStar } from 'react-icons/ai';

type starType = {
	stars: number;
	reviews: number;
};

const Stars = ({ stars, reviews }: starType) => {
	const ratingStar = Array.from({ length: 5 }, (elem, index) => {
		let number = index + 0.5;
		return (
			<span key={index}>
				{stars >= index + 1 ? (
					<FaStar className='icon' />
				) : stars >= number ? (
					<FaStarHalfAlt className='icon' />
				) : (
					<AiOutlineStar className='icon' />
				)}
			</span>
		);
	});
	return(
        <div>
          <div className="icon-style flex">
            <span className='flex text-orange-300 text-[11px] mt-2'>{ratingStar}</span>
            <span className='ml-1 text-[12px] text-[#9e9e9e] mt-[6px]'>({reviews})</span>
          </div>
        </div>
    );
};

export default Stars;
