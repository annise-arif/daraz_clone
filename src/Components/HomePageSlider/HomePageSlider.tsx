import img1 from '../../assets/img/banner/2353ca9a-f0c4-4aee-87a8-d2547747218d.jpg';
import img2 from '../../assets/img/banner/3830f28d-241f-4486-ae57-c71090b19eed.jpg';
import img3 from '../../assets/img/banner/40979ea0-b8a9-4dea-971b-489467a61fbc.jpg';
import img4 from '../../assets/img/banner/4cd515c3-7f8e-4116-b31c-969a0e4c75ed.jpg';
import img5 from '../../assets/img/banner/81d27012-87c6-4f39-ae8a-05d19e52907e.jpg';
import img6 from '../../assets/img/banner/c1949791-d57e-4532-b351-c572edfb17c4.jpg_1200x1200.jpg';
import img7 from '../../assets/img/banner/f282ea4b-1edb-410c-8626-f7c5f1e0d58b.jpg';
import img8 from '../../assets/img/banner/f915fbdf-2bb8-4770-a1d2-ff6484191519.jpg';
import img9 from '../../assets/img/banner/ff927767-47fe-4c79-b169-6f5af64a3312.jpg';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SLIDER_ITEMS = [
	{
		id: 1,
		imageURL: img1,
		color: 'rgb(214, 181, 220)',
	},
	{
		id: 2,
		imageURL: img2,
		color: 'rgb(255, 255, 255)',
	},
	{
		id: 3,
		imageURL: img3,
		color: 'rgb(101, 166, 26)',
	},
	{
		id: 4,
		imageURL: img4,
		color: 'rgb(123, 135, 111)',
	},
	{
		id: 5,
		imageURL: img5,
		color: 'rgb(143, 235, 233)',
	},
	{
		id: 6,
		imageURL: img6,
		color: 'rgb(244, 41, 51)',
	},
	{
		id: 7,
		imageURL: img7,
		color: 'rgb(249, 103, 35)',
	},
	{
		id: 8,
		imageURL: img8,
		color: 'rgb(233, 234, 240)',
	},
	{
		id: 9,
		imageURL: img9,
		color: ' rgb(244, 233, 233)',
	},
];

const HomePageSlider = () => {
	const settings: Settings = {
		dots: true,
		autoplay: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplaySpeed: 3000,
		fade: true,
	};

	return (
		<Slider {...settings} className='overflow-hidden'>
			{SLIDER_ITEMS.map(({ id, imageURL, color }) => (
				<div key={id}>
					<div className={`h-full`} style={{ backgroundColor: color }}>
						<img src={imageURL} className='w-[51.5%] ml-[29.6%] mx-auto' />
					</div>
				</div>
			))}
		</Slider>
	);
};

export default HomePageSlider;
