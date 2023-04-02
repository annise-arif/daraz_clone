import JUST_FOR_YOU from '../../API/JustForYou';
import JustForYouCard from './JustForYouCard';

const JustForYou = () => {
    return (
        <div className='justify-center align-middle w-[63%] mx-auto pb-11'>
            <h3 className='text-[22px] text-gray-900 mb-[4px]'>JustForYou</h3>
            <div className="JustForYou gap-[0.9rem] grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2">
            {JUST_FOR_YOU.map((items) => {
						return <JustForYouCard key={items.id} items={items} />;
					})}
            </div>
        </div>
    );
};

export default JustForYou;