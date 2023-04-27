import { FaFacebookF, FaGooglePlusG } from 'react-icons/fa';
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {

	const navigate = useNavigate();
	const location = useLocation();
	let from = location.state?.from?.pathname || "/";
	const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
	if(loading){
		return <span>loading</span>;
	}
	if (user) {
		navigate(from, { replace: true});
	}
	return (
		<div className='login-main bg-[#EFF0F5] h-[320px]] pb-8 font-[Roboto-Regular]'>
			<div className='login-title pt-[2.9rem]'>
				<div className='flex lg:w-[810px] mx-auto justify-between lg:flex-row sm:flex-col'>
					<h3 className='text-[22px] text-[#424242]'>Welcome to Daraz! Please login.</h3>
					<div className='login-other -mb-2 text-[12px] text-[#757575] flex flex-row'>
						<div className='mt-[8px]'>
							New member?
							<Link to='/register'>
								<span className='text-[#1a9cb7] px-[3px]'>Register</span>
							</Link>
							here.
						</div>
					</div>
				</div>
			</div>
			<div className='login-card xl:flex-row lg:flex sm:flex-col xs:flex-col mt-[27px] pt-[14px] pl-[25px] pr-[50px] d-[50px] mx-auto lg:w-[810px] lg:h-[264.8px] sm:h-screen bg-[#FFFFFF]'>
				<div className='phn-password mr-[50px] lg:w-[380px] lg:h-[182.8px]'>
					<form>
						<div className='form-control phn-emil mb-[17px]'>
							<label className='label'>
								<span className='label-text text-[12.1px] -ml-[4px] -mb-[5px]'>
									Phone Number or Email*
								</span>
							</label>
							<input
								type='text'
								placeholder='Please enter your Phone Number or Email'
								className="outline-none placeholder:text-[#B1A9A9] hover:outline-none text-[400] rounded-none h-[40px] text-[14px] px-[10px] w-[380px] border border-[#ddd]"
							/>
							
						</div>

						<div className='form-control password'>
							<label className='label'>
								<span className='label-text text-[12px] -ml-[4px] -mb-[5px] text-[#424242]'>
									Password*
								</span>
							</label>
							<input
								type='password'
								placeholder='Please enter your password'
								className='outline-none placeholder:font-[Roboto, Regolar] hover:outline-none placeholder:text-[#B1A9A9] text-[400] rounded-none h-[40px] text-[14px] px-[10px] w-[380px] border border-[#ddd]'
							/>
						</div>
					</form>
					{/* fotgote passwore section */}
					<div className='forgot-password w-[380px] text-right mt-3.5'>
						<Link to='forgotpassword'>
							<span className='text-[#049cb9] text-[12px]'>Forgot Password?</span>
						</Link>
					</div>
					{/* end */}
				</div>

				<div className='social-login pt-[23px] w-[305px] h-[189.8px]'>
					{/* Login */}
					<div className='login-button'>
						<button className='bg-[#f57224] rounded-[3px] pb- h-[48px] w-full text-white text-[14px]'>
							LOGIN
						</button>
					</div>
					{/* end */}

					{/* Or, login with title */}
					<div className='text-[#757575] text-[12px] py-[10px]'>Or, login with</div>
					{/* end */}
					<div className='facebook-login mb-[12px]'>
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
					<div className='google-login mb-12'>
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
			</div>
		</div>
	);
};

export default Login;
