const SecondFooter = () => {
	return (
		<div className='main_div bg-white'>
			<div className='grid mb-[1.6rem] lg:grid-cols-5 md:grid-cols-3 w-[63%] mx-auto pt-6 sm:grid-cols-1'>
				<div className='payment_methods'>
					<h3 className='leading-[18px] text-[#333] font-[400] text-[18px]'>Payment Methods</h3>
					<div className='card mt-3'>
						<img
							className='w-[12.9rem] -ml-1'
							src='https://i.ibb.co/Jshyv9k/Screenshot-2023-04-04-231203.png'
							alt=''
						/>
					</div>
					<h3 className='leading-[18px] text-[#333] font-[400] text-[18px] mt-5'>© Daraz 2023</h3>
				</div>
				<div className='daraz_international'>
					<h3 className='leading-[18px] text-[#333] font-[400] text-[18px]'>Daraz International</h3>
					<div className='flags mt-3.5 flex'>
						<a className='' href='/'>
							<img src='https://i.ibb.co/d5hL5wP/Screenshot-2023-04-04-233136.png' alt='' />
						</a>
						<a className='mt-[2.9px] mx-1.5' href='/'>
							<img src='https://i.ibb.co/z6P0k70/Bangla.png' alt='' />
						</a>
						<a className='mt-[2.9px]' href='/'>
							<img src='https://i.ibb.co/W58DK1P/hindi.png' alt='' />
						</a>
						<a className='mx-1 mt-[0.8px]' href='/'>
							<img src='https://i.ibb.co/0VphbLR/pak.png' alt='' />
						</a>
						<a className='mt-[1.5px]' href='/'>
							<img src='https://i.ibb.co/HPBvfJ9/chaines.png' alt='' />
						</a>
					</div>
				</div>
				<div className='follow_us'>
					<h3 className='leading-[18px] text-[#333] font-[400] text-[18px]'>Follow Us</h3>
					<div className='social_link mt-3.5 flex'>
						<a className='' href='/'>
							<img src='https://i.ibb.co/DCjL7qj/fb.png' alt='' />
						</a>
						<a className='mt-[1px]' href='/'>
							<img src='https://i.ibb.co/SPvh7Yv/daraz.png' alt='' />
						</a>
						<a className='-mt-[1px]' href='/'>
							<img src='https://i.ibb.co/J5D4rn0/youtube.png' alt='' />
						</a>
						<a className=' mt-[1.2px]' href='/'>
							<img src='https://i.ibb.co/zX6Pwgf/twitter.png' alt='' />
						</a>
						<a className='mt-[0px] ml-[2px]' href='/'>
							<img src='https://i.ibb.co/HNF7DGL/ingtra.png' alt='' />
						</a>
					</div>
				</div>
				<div className='verified_by'>
					<h3 className='leading-[18px] text-[#333] font-[400] text-[18px]'>Verified by</h3>
					<img
						className='mt-4 -ml-1'
						src='https://i.ibb.co/bb2TjpZ/Screenshot-2023-04-04-232643.png'
						alt=''
					/>
				</div>
				<div className='dbid'>
					<h3 className='leading-[18px] text-[#333] font-[400] text-[18px]'>DBID</h3>
					<p className='mt-3'>
						<small className='text-[#999] text-[12px]'>Registration Number: 304903094</small>
					</p>
				</div>
			</div>
		</div>
	);
};

export default SecondFooter;
