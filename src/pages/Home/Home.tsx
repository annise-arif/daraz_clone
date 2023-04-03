import CardChannel from "../../Components/CardChannel/CardChannel";
import FlashSale from "../../Components/FlashSale/FlashSale";
import HomePageSlider from "../../Components/HomePageSlider/HomePageSlider";
import ShopNow from "../../Components/ShopNow/ShopNow";
import Categories from "../../Components/Categories/Categories.js";
import JustForYou from "../../Components/JustForYou/JustForYou";
import Footer from "../../Share/Footer/Footer";

const Home = () => {
    return (
        <div className="Home">
            <HomePageSlider />
            <ShopNow />
            <CardChannel />
            <FlashSale />
            <Categories />
            <JustForYou />
            <Footer />
        </div>
    );
};

export default Home;