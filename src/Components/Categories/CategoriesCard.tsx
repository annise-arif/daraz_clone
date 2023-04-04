

type itemType = {
    id: number;
    img: string;
    title: string;
}

const CategoriesCard = ({data}: any) => {
    return (
        <div className='Categories_Card cursor-pointer hover:z-10 hover:shadow-[1px_3px_5px_0.9px_#00000024] w-[148.9px] h-[148.5px] bg-white justify-center'>
            <img src={data.img} alt="img"  className="w-[88px] h-[88px] mx-auto pt-4"/>
            <p className="text-center pt-[9px] px-2 text-[14px] text-[#212121]">{data.title}</p>
        </div>
    );
};

export default CategoriesCard;