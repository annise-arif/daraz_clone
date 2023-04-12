import Logo from '../../assets/Logo/Logo.png';
import Search from '../../assets/Svg/search_FILL0_wght400_GRAD0_opsz48.svg';
import Cart from '../../assets/Svg/cart.svg';
import DownloadApp from '../../assets/Logo/img.png';
const Header = () => {
	return (
		<div className='bg-white sticky top-0'>
			<div className='flex gap-0 py-[0.71rem] pr-[1.3%] shadow-md shadow-black-200 mx-auto justify-center'>
				<div className='logo ml-[3.3%] mr-[3.7%] grow-0'>
					<a href="/"><img src={Logo} alt='logo' width={'135px'} height={'41'} /></a>
				</div>

				<div className='search-bar relative w-[36.7%]'>
					<input
						type='text'
						placeholder='Search in Daraz'
						className='bg-[#cfcfcf3d] placeholder:text-[14.4px] outline-none py-[11px] px-[19px] rounded-sm w-full'
					/>
					<button>
						<div className='search-icon absolute top-[0%] left-[93%] bg-[#f57224] p-2.5 rounded-r-sm'>
							<img src={Search} alt='search-svg' />
						</div>
					</button>
				</div>

				<div className='cart-icon mt-[0.8%] px-7'>
					<button>
						<img src={Cart} alt='cart-svg' />
					</button>
				</div>

				<div className='download-app-img grow-0 pr-9 pl-6'>
					<button>
						<img width={'188px'} height={'45px'} src={DownloadApp} alt='downloadApp' />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Header;
