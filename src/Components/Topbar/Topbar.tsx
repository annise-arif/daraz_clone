import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';

const Topbar = () => {
	const [user] = useAuthState(auth);
	const handleSignOut = () => {
		signOut(auth);
	};
	return (
		<div className='sm:d-none'>
			<ul className='flex bg-[#ECECEC] lg:pl-[528px] lg:pr-60 py-[0.28rem]'>
				{user && <span className='basis-[85px]'></span>}
				<li className='font-[500] text-xs lg:mr-[3.3%] sm:mr-2 hover:text-orange-400 hover:underline cursor-pointer'>
					<a href='/'>SAVE MORE ON APP</a>
				</li>
				<li className='font-[500] text-xs lg:mr-[3.3%] sm:mr-2 hover:text-orange-400 hover:underline cursor-pointer'>
					<a href='/'>DARAZ DONATES</a>
				</li>
				<li className='font-[500] text-xs lg:mr-[3.3%] sm:mr-2 hover:text-orange-400 hover:underline cursor-pointer'>
					<a href='/'>SELL ON DARAZ</a>
				</li>
				<li className='font-[500] text-xs lg:mr-[3.3%] sm:mr-2 hover:text-orange-400 hover:underline cursor-pointer'>
					<a href='/'>CUSTOMER CARE</a>
				</li>
				<li className='font-[500] text-xs lg:mr-[3.3%] sm:mr-2 hover:text-orange-400 hover:underline cursor-pointer'>
					<a href='/'>TRACK MY ORDER</a>
				</li>

				{user ? (
					<>
					<li className=' font-[500] text-xs lg:mr-[1.3%] sm:mr-2 hover:text-orange-400 hover:underline cursor-pointer'>
						<a href='/login'>
							{user.displayName?.toUpperCase()}
							{"'S ACCOUNT"}
						</a>
					</li>
					<li className='font-[900] text-xs lg:mr-[3.3%] sm:mr-2 hover:text-red-500 hover:underline cursor-pointer'>
					<a onClick={handleSignOut} href='/' className=''>
						Sign Out
						</a>
					</li>
					</>
				) : (
					<>
						<li className='font-[500] text-xs lg:mr-[3.3%] sm:mr-2 hover:text-orange-400 hover:underline cursor-pointer'>
							<a href='/'>DARAZ AFFILIATE PROGRAM</a>
						</li>
						<li className='font-[500] text-xs lg:mr-[3.3%] sm:mr-2 hover:text-orange-400 hover:underline cursor-pointer'>
							<a href='/login'>SIGNUP / LOGIN</a>
						</li>
					</>
				)}

				<li className='font-[500] text-xs lg:mr-[3.3%] sm:mr-2 hover:text-orange-400 hover:underline cursor-pointer'>
					<a href='/'>ভাষা</a>
				</li>
			</ul>
		</div>
	);
};

export default Topbar;
