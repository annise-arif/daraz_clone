import CardChannel from "../../Components/CardChannel/CardChannel";
import FlashSale from "../../Components/FlashSale/FlashSale";
import HomePageSlider from "../../Components/HomePageSlider/HomePageSlider";
import ShopNow from "../../Components/ShopNow/ShopNow";

const Home = () => {
    return (
        <div className="Home">
            <HomePageSlider />
            <ShopNow />
            <CardChannel />
            <FlashSale />
        </div>
    );
};

export default Home;