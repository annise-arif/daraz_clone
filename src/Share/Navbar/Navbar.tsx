import Header from "../../Components/Header/Header";
import Topbar from "../../Components/Topbar/Topbar";

const Navbar = () => {
    return (
        <div className="sticky top-0 z-20">
            <Topbar />
            <Header />
        </div>
    );
};

export default Navbar;