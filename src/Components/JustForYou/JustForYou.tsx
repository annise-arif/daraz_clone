import JUST_FOR_YOU from '../../API/JustForYou';
import JustForYouCard from './JustForYouCard';

const JustForYou = () => {
    return (
        <div className='justify-center align-middle w-[63%] mx-auto pb-2.5'>
            <h3 className='text-[22px] text-gray-900'>JustForYou</h3>
            <div className="JustForYou gap-[0.9rem] grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2">
            {JUST_FOR_YOU.map((items) => {
						return <JustForYouCard key={items.id} items={items} />;
					})}
            </div>
            <div className="load_more_btn mt-[2.4rem] text-center">
                <button className='text-orange-500 font-[Roboto-Medium] border text-[14px] font-[500] py-2 border-orange-500 w-[32.6%] pt-2.5'>LOAD MORE</button>
            </div>
        </div>
    );
};

export default JustForYou;