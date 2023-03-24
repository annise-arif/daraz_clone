import CardChannel from "../../Components/CardChannel/CardChannel";
import HomePageSlider from "../../Components/HomePageSlider/HomePageSlider";
import ShopNow from "../../Components/ShopNow/ShopNow";

const Home = () => {
    return (
        <div className="Home">
            <HomePageSlider />
            <ShopNow />
            <CardChannel />
            
        </div>
    );
};

export default Home;