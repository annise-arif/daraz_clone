import CategoriesCard from "./CategoriesCard";
import CATEGORIES from "../../API/categories";

const Categories = () => {
    return (
        <div className='justify-center align-middle w-[63%] mx-auto pb-11'>
            <h3 className='text-[22px] text-gray-900 mb-[4px]'>Categories</h3>
            <div className="categories bg-[#DDDDDD] grid gap-[1.7px] lg:grid-cols-8 md:grid-cols-4 sm:grid-cols-2">
                {
                    CATEGORIES.map((item) => {
                        return <CategoriesCard key={item.id} data={item} />
                    })
                }
            </div>
        </div>
    );
};

export default Categories;