import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import { FaFacebookF, FaGooglePlusG } from 'react-icons/fa';

const Register = () => {
	return (
		<div className='register-main bg-[#EFF0F5] pb-[29px] font-[Roboto-Regular]'>
			<div className='register-title pt-[2.9rem]'>
				<div className='flex w-[810px] mx-auto justify-between lg:flex-row sm:flex-col'>
					<h3 className='text-[22px] text-[#424242]'>Create your Daraz Account</h3>
					<div className='login-other -mb-2 text-[12px] text-[#757575] flex flex-row'>
						<div className='mt-[8px]'>
							Already member?
							<Link to='/login'>
								<span className='text-[#1a9cb7] px-[3px]'>Login</span>
							</Link>
							here.
						</div>
					</div>
				</div>
			</div>
			<div className='register-card flex mt-[27px] pt-[14px] pl-[25px] pr-[50px] mx-auto w-[810px] h-[389.8px] bg-[#FFFFFF]'>
				<div className='phn-password mr-[50px]'>
					<form>
						<div className='form-control register-phone-number mb-[28px]'>
							<label className='label'>
								<span className='label-text text-[12.1px] -ml-[4px] -mb-[5px]'>Phone Number*</span>
							</label>
							<input
								type='text'
								placeholder='Please enter your Phone Number or Email'
								className='outline-none placeholder:text-[#B1A9A9] hover:outline-none text-[400] rounded-none h-[40px] text-[14px] px-[10px] w-[380px] border border-[#ddd]'
							/>
						</div>

						<div className='get-sms-code-slide bg-[#D4F3EB] rounded-md mb-[9px]'>
							<div className='slide-container flex'>
								<div className='right-arrow h-[40px] rounded-none w-[40px] bg-[#19bd94] shadow-[0px_3px_10px_0.5px_#0becb4]'>
									<span className='flex justify-center mt-[11px]'>
										<IoIosArrowForward className='text-[17.5px] text-white' />
										<IoIosArrowForward className='text-[17.5px] text-[#f8f8f8ce] -ml-[12px]' />
									</span>
								</div>
								<div className='slide-text flex-grow text-[#1dd4a7] mt-2 ml-20'>
									<a href='' className='text-[14px]'>
										Slide to get SMS Code
									</a>
								</div>
							</div>
						</div>

						<div className='form-control register-password mb-[21px]'>
							<label className='label'>
								<span className='label-text text-[12px] -ml-[4px] -mb-[5px] text-[#424242]'>
									Password*
								</span>
							</label>
							<input
								type='password'
								placeholder='Minimum 6 characters with a number and a letter'
								className='outline-none placeholder:font-[Roboto, Regolar] hover:outline-none placeholder:text-[#B1A9A9] text-[400] rounded-none h-[40px] text-[14px] px-[10px] w-[380px] border border-[#ddd]'
							/>
						</div>

						<div className='gender-and-date-of-birth flex'>
							<div className='birth-day'>
								<div className='title'>
									<span className='text-[12px] text-[#424242]'>Birthday</span>
								</div>
								<div className='date-of-birth mt-[5px]'>
									<select className='Month max-w-xs font-[Sans-serif] border outline-none w-[120px] h-[36px] border-[#ddd] py-[7px] px-1 text-[14px] text-[#999]'>
										<option selected value='Month' className=' hover:bg-gray-300'>
											Month
										</option>
										{[
											'January',
											'February',
											'March',
											'April',
											'May',
											'June',
											'July',
											'August',
											'September',
											'Octaber',
											'November',
											'December',
										].map((month) => (
											<option className=' hover:bg-gray-300' value={month}>
												{month}
											</option>
										))}
									</select>
									<select className='Day max-w-xs font-[Sans-serif] border-y outline-none w-[58px] h-[36px] border-[#ddd] py-[7px] px-1 text-[14px] text-[#999]'>
										<option selected value='Day' className='text-[14px] hover:bg-gray-300'>
											Day
										</option>
										{[
											'1',
											'2',
											'3',
											'4',
											'5',
											'6',
											'7',
											'8',
											'9',
											'10',
											'11',
											'12',
											'13',
											'14',
											'15',
											'16',
											'17',
											'18',
											'19',
											'20',
											'21',
											'22',
											'23',
											'24',
											'25',
											'26',
											'27',
											'28',
											'29',
											'30',
											'31',
										].map((day) => (
											<option className=' hover:bg-gray-300' value={day}>
												{day}
											</option>
										))}
									</select>
									<select className='Year max-w-xs font-[Sans-serif] border outline-none w-[75px] h-[36px] border-[#ddd] py-[7px] px-1 text-[14px] text-[#999]'>
										<option
											selected
											value='Year'
											className='font-[Roboto] text-[14px] hover:bg-gray-300'
										>
											Year
										</option>
										{[
											'1',
											'2',
											'3',
											'4',
											'5',
											'6',
											'7',
											'8',
											'9',
											'10',
											'11',
											'12',
											'13',
											'14',
											'15',
											'16',
											'17',
											'18',
											'19',
											'20',
											'21',
											'22',
											'23',
											'24',
											'25',
											'26',
											'27',
											'28',
											'29',
											'30',
											'31',
										].map((year) => (
											<option className=' hover:bg-gray-300' value={year}>
												{year}
											</option>
										))}
									</select>
								</div>
							</div>
							<div className='gender ml-[7px]'>
								<div className='title'>
									<span className='text-[12px] text-[#000]'>Gender</span>
								</div>
								<div className='gender mt-[5px]'>
									<select className='Gender max-w-xs font-[Sans-serif] border outline-none w-[100px] h-[36px] border-[#ddd] py-[7px] px-1 text-[14px] text-[#999]'>
										<option selected value='Select' className=' hover:bg-gray-300'>
											Select
										</option>
										{['Male', 'Female', 'Other'].map((gender) => (
											<option className=' hover:bg-gray-300 text-black' value={gender}>
												{gender}
											</option>
										))}
									</select>
								</div>
							</div>
						</div>
					</form>
				</div>

				<div className='login social-login w-[305px] h-[189.8px]'>
					<div className='form-control register-Full-name mb-[21px]'>
						<label className='label'>
							<span className='label-text text-[12px] -ml-[4px] -mb-[5px] text-[#424242]'>
								Full name*
							</span>
						</label>
						<input
							type='password'
							placeholder='Enter your first and last name'
							className='outline-none placeholder:font-[Roboto, Regolar] hover:outline-none placeholder:text-[#B1A9A9] text-[400] rounded-none h-[40px] text-[14px] px-[10px] w-full border border-[#ddd]'
						/>
					</div>
					<div className='check-box-and-text flex'>
						<div className='check-box mr-[6px] -ml-1'>
							<div className='form-control'>
								<label className='cursor-pointer label'>
									<input type='checkbox' 
									className='accent-[#ff8a46]
									 border-[#f77931] checkbox-xs' />
								</label>
							</div>
						</div>
						<div className='text'>
							<p className='text-[12px] mt-[6px] text-[#757575] leading-[14px]'>
								I'd like to receive exclusive offers and promotions via SMS
							</p>
						</div>
					</div>
					{/* Login */}
					<div className='signUp-button mt-[13px]'>
						<button className='bg-[#f57224] rounded-[3px] pb- h-[48px] w-full text-white text-[14px]'>
							SIGN UP
						</button>
					</div>
					{/* end */}

					{/* privary policy */}
					<div className='text-[#757575] text-[12px] py-[10px] leading-[14px]'>By clicking “SIGN UP”, I agree to Daraz's  <span className='text-[#049cb9]'> Terms of Use</span> and  <span className='text-[#049cb9]'> Privacy Policy</span></div>
					{/* end */}

					{/* Or, login with title */}
					<div className='text-[#757575] text-[12px] py-[10px] leading-[14px]'>Or, sign up with</div>
					{/* end */}

					{/* social login */}
					<div className="social-login flex mt-1">
					<div className='facebook-login mb-[12px] w-[50%] mr-[1.2%]'>
						<button
							className='bg-[#3B5998] rounded-[3px] 
						h-[40px] font-[sans-serif] w-full text-[#fff] text-[18px]'
						>
							<div className='fb-icon flex text-center justify-center'>
								<FaFacebookF className='mr-[20px] text-[16px] mt-[5px]' />
								Facebook
							</div>
						</button>
					</div>
					<div className='google-login mb-12 w-[50%] ml-[1.2%]'>
						<button
							className='bg-[#D34836] rounded-[3px] 
						h-[40px] font-[sans-serif] w-full text-[#fff] text-[18px]'
						>
							<div className='google-icon flex text-center justify-center'>
								<FaGooglePlusG className='mr-[19px] text-[26px]' />
								Google
							</div>
						</button>
					</div>
					</div>
					{/* social login end */}
				</div>
			</div>
		</div>
	);
};

export default Register;
