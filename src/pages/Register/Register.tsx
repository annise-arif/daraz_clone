import React, { useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import { FaFacebookF, FaGooglePlusG } from 'react-icons/fa';
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import auth from '../../firebase.init';


const Register = () => {
	const phnNumberRef = useRef('');
	const passwordRef = useRef('');
	const navigate = useNavigate();
	const location = useLocation();
	let from = location.state?.from?.pathname || "/";
	

	

	// phone auth start
	const [phone, setPhone] = useState('');
	const [otp, setOtp] = useState("");


	
	const sendOtp = async() => {
		try{
			let recaptchaVerifier = new RecaptchaVerifier("recaptcha",{},auth);
			  let confirmation =  await signInWithPhoneNumber(auth,phone,recaptchaVerifier);
			  console.log(confirmation);
		}catch(err) {
			console.log(err)
		}
	}
	const verifyOtp = () =>{}
	const logOut = () =>{}
	// phone auth end
	

	// google auth start
	const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
	// google auth end

	if(loading){
		return <span>loading</span>;
	}
	if (user) {
	  navigate(from, { replace: true});
	}
  
	

	const handleRegisterForm = (event) => {
		event.preventDefault();
		// const phoneNumber = phnNumberRef.current.value;
		// const password = passwordRef.current.value;
		// if(email && password){
		//   createUserWithEmailAndPassword(email, password);
		// }
		console.log();
	  };

	 

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
					<form onClick={handleRegisterForm}>
						<div className='form-control register-phone-number mb-[28px]'>
							<label className='label'>
								<span className='label-text text-[12.1px] -ml-[4px] -mb-[5px]'>Phone Number*</span>
							</label>
							<input
								onChange={(e) => setPhone(e.target.value)}
								ref={phnNumberRef}
								type='number'
								placeholder='Please enter your Phone Number or Email'
								className='outline-none placeholder:text-[#B1A9A9] hover:outline-none text-[400] rounded-none h-[40px] text-[14px] px-[10px] w-[380px] border border-[#ddd]'
							/>
						</div>

						<div className='get-sms-code-slide bg-[#D4F3EB] rounded-md mb-[9px]'>
							
						<div className='slide-container flex h-[40px]'>
								 <div className='z-30 absolute right-arrow h-[40px] rounded-none w-[40px] bg-[#19bd94] shadow-[0px_3px_10px_0.5px_#0becb4]'>
								 
								 <span className='flex justify-center mt-[11px]'>
										 <IoIosArrowForward className='text-[17.5px] text-white' />
										 <IoIosArrowForward className='text-[17.5px] text-[#f8f8f8ce] -ml-[12px]' />
									 </span>
									 
								 </div>						
								 <button onClick={sendOtp} className='text-[14px] slide-text flex-grow text-[#1dd4a7] text-center'>
									 Slide to get SMS Code
								 </button>
							 </div>
							  
						</div><div id="recaptcha"></div>

						<div className='form-control register-password mb-[21px]'>
							<label className='label'>
								<span className='label-text text-[12px] -ml-[4px] -mb-[5px] text-[#424242]'>
									Password*
								</span>
							</label>
							<input
								ref={passwordRef}
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

				<div className='full-name-SignUpBtn-and-social-login w-[305px] h-[189.8px]'>
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
									<input
										type='checkbox'
										className="relative bg-orange-500 left-0 h-[16px] w-[16px] p-[1px] shrink-0 appearance-none rounded-sm outline-none after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[length:40px] after:bg-center after:bg-no-repeat after:content-[''] checked:bg-white border-[1.5px] hover:border-[1.5px] border-orange-500 cursor-pointer after:bg-[url('data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjZmZmZmZmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCI+PHRpdGxlPmljb25fYnlfUG9zaGx5YWtvdjEwPC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZmZmZmZmIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNi4wMDAwMDAsIDI2LjAwMDAwMCkiPjxwYXRoIGQ9Ik0xNy45OTk5ODc4LDMyLjQgTDEwLjk5OTk4NzgsMjUuNCBDMTAuMjI2Nzg5MSwyNC42MjY4MDE0IDguOTczMTg2NDQsMjQuNjI2ODAxNCA4LjE5OTk4Nzc5LDI1LjQgTDguMTk5OTg3NzksMjUuNCBDNy40MjY3ODkxNCwyNi4xNzMxOTg2IDcuNDI2Nzg5MTQsMjcuNDI2ODAxNCA4LjE5OTk4Nzc5LDI4LjIgTDE2LjU4NTc3NDIsMzYuNTg1Nzg2NCBDMTcuMzY2ODIyOCwzNy4zNjY4MzUgMTguNjMzMTUyOCwzNy4zNjY4MzUgMTkuNDE0MjAxNCwzNi41ODU3ODY0IEw0MC41OTk5ODc4LDE1LjQgQzQxLjM3MzE4NjQsMTQuNjI2ODAxNCA0MS4zNzMxODY0LDEzLjM3MzE5ODYgNDAuNTk5OTg3OCwxMi42IEw0MC41OTk5ODc4LDEyLjYgQzM5LjgyNjc4OTEsMTEuODI2ODAxNCAzOC41NzMxODY0LDExLjgyNjgwMTQgMzcuNzk5OTg3OCwxMi42IEwxNy45OTk5ODc4LDMyLjQgWiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg==')]"
									/>
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
						<input type='submit' value="SIGN UP" className='bg-[#f57224] hover:bg-[#d35a0a] transition duration-500 ease-in-out rounded-[3px] pb- h-[48px] w-full text-white text-[14px] cursor-pointer'>
							
						</input>
					</div>
					{/* end */}

					{/* privary policy */}
					<div className='text-[#757575] text-[12px] py-[10px] leading-[14px]'>
						By clicking “SIGN UP”, I agree to Daraz's{' '}
						<span className='text-[#049cb9]'> Terms of Use</span> and{' '}
						<span className='text-[#049cb9]'> Privacy Policy</span>
					</div>
					{/* end */}

					{/* Or, login with title */}
					<div className='text-[#757575] text-[12px] py-[10px] leading-[14px]'>
						Or, sign up with
					</div>
					{/* end */}

					{/* social login */}
					<div className='social-login flex mt-1'>
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
								onClick={() => signInWithGoogle()}
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
