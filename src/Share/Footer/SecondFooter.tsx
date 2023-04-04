const SecondFooter = () => {
	return (
		<div className='grid lg:grid-cols-5 md:grid-cols-3 w-[63%] mx-auto mt-6 sm:grid-cols-1'>
			<div className='payment_methods'>
				<h3 className="leading-[18px] text-[#333] font-[400] text-[18px]">Payment Methods</h3>
                <h3 className="leading-[18px] text-[#333] font-[400] text-[18px] mt-5">© Daraz 2023</h3>
			</div>
			<div className='daraz_international'>
				<h3 className="leading-[18px] text-[#333] font-[400] text-[18px]">Daraz International</h3>
			</div>
			<div className='follow_us'>
				<h3 className="leading-[18px] text-[#333] font-[400] text-[18px]">Follow Us</h3>
			</div>
			<div className='verified_by'>
				<h3 className="leading-[18px] text-[#333] font-[400] text-[18px]">Verified by</h3>
			</div>
			<div className='dbid'>
				<h3 className="leading-[18px] text-[#333] font-[400] text-[18px]">DBID</h3>
				<p>
					<small className='text-gray-500'>Registration Number: 304903094</small>
				</p>
			</div>
		</div>
	);
};

export default SecondFooter;
