import { useParams } from 'react-router-dom';
import JustForYouDataById from '../../API/JustForYouDataById';
import Slider from "react-slick";

const ProductDetails = () => {
	let { _id } = useParams();
	const service = JustForYouDataById(_id);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true
      };

	return (
		<div key={_id} className='single-product-details bg-[#eff0f5]'>
			<div className='grid grid-cols-7 gap-4 justify-center align-middle w-[62%] mx-auto bg-white'>
				<div className='item-galary w-[338px] h-[402] col-span-2'>
					<div className='galary-preview-panel border-b'>
						<div className='galary-preview-panel-content mb-3 h-[330px] w-[330px]'>
							<img src={service[0]?.img} alt='' className='h-full w-full' />
						</div>
					</div>
					<div className='next-slick w-full mt-2 h-auto'>
						<Slider className='slick-track:w-full' {...settings}>
							<div className=''>
								<img className='w-[52px] h-[52px]' src="https://static-01.daraz.com.bd/p/160fbb8e37e475aacf4d3a455c15b083.jpg_100x100.jpg_.webp" alt="" />
							</div>
							<div className=''>
								<img className='w-[52px] h-[52px]' src="https://static-01.daraz.com.bd/p/160fbb8e37e475aacf4d3a455c15b083.jpg_100x100.jpg_.webp" alt="" />
							</div>
							
							<div>
								<h3>3</h3>
							</div>
							<div>
								<h3>4</h3>
							</div>
							<div>
								<h3>5</h3>
							</div>
							<div>
								<h3>6</h3>
							</div>
						</Slider>
					</div>
				</div>

				<div className='col-span-3'>07</div>
				<div className='col-span-2 bg-orange-400'>06</div>
			</div>
		</div>
	);
};

export default ProductDetails;
