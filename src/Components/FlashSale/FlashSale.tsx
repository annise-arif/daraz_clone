import FLASH_SALE from "../../API/flash_sale";
import Card from "./Card";


const FlashSale = () => {

    const time = new Date().toLocaleTimeString()
    console.log(time);

    return (
        <div className="justify-center align-middle w-[1198px] mx-auto pb-10">
            <h3 className="text-2xl text-gray-500 mb-[4px]">FlashSale</h3>
            <div className="flash-sale bg-white">

                <div className="on_sale_now flex justify-between">
                    <div className="title_and_ending_time flex py-5 px-5">
                      <small className="text-orange-600 mr-20 text-[14px] font-medium">On Sale Now</small>
                      <div className="ending_time text-[14px]"><span>Ending in</span></div>
                    </div>
                    <button className="border-orange-500 px-2 text-sm text-orange-500 mt-[0.8rem] mr-[0.8rem] h-[36px] border rounded-sm">SHOP MORE</button>
                </div>
                <hr />
                <div className="products grid grid-cols-6 gap-4 w-[1198px] mx-auto">
                {FLASH_SALE.map(({id, img, title,new_price}) =>{
                        return <Card key={id} img={img} new_price={new_price} title={title} />
                    })}
                </div>

            </div>
        </div>
    );
};

export default FlashSale;