import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import "./Header.scss";
import { useEffect, useState } from "react";

const Header = () => {
  const [scroll, setScroll] = useState(false);
    const navigate = useNavigate();
    const handleScroll = () => {
      const offSet = window.scrollY;
      if(offSet > 200){
        setScroll(true)
      }
      else{
        setScroll(false);
      }
    }

    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
    },[])


    return (
        <>
            <header
                className={`main-header ${scroll ? 'sticky-header' : ''}`}
            >
                <div className="header-content">
                    <ul className="left">
                        <li onClick={() => navigate("/")}>Home</li>
                        <li onClick={() => navigate("/about")}>About</li>
                        <li>Categories</li>
                    </ul>
                    <div className="center" onClick={() => navigate("/")}>
                        JSDEVSTORE.
                    </div>
                    <div className="right">
                        <TbSearch />
                        <AiOutlineHeart />
                        <span
                            className="cart-icon"
                           
                        >
                            <CgShoppingCart />
                           
                        </span>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
