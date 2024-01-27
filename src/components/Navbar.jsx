import { useEffect } from "react";

// Icons
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import avatar from "../data/avatar.jpg";

import { Chat, Cart, Notification, UserProfile } from "../components";

import { useStateContext } from "../contexts/ContextProvider";

const NavButton = ({ title, customFunction, icon, color, dotColor }) => {
  return (
    <TooltipComponent content={title} position="BottomCenter">
      <button
        type="button"
        onClick={customFunction}
        style={{ color }}
        className="relative text-xl rounded-full p-3 hover:bg-light-gray"
      >
        <span
          style={{ background: dotColor }}
          className="absolute inline-flex rounded-full h-3 w-3 right-2 top-2 "
        />

        {icon}
      </button>
    </TooltipComponent>
  );
};

function Navbar() {
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    setIsClicked,
    handleClick,
    screenSize,
    setScreenSize,
  } = useStateContext();

  useEffect(() => {
    window.addEventListener("resize", handleScreenSize);
    handleScreenSize();

    return () => {
      window.removeEventListener("resize", handleScreenSize);
    };
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, screenSize);

  const handleScreenSize = () => {
    setScreenSize(window.innerWidth);
  };

  return (
    <div className="border-0 border-blue-500 flex justify-between p-2 md:mx-6 relative">
      <NavButton
        title="Menu"
        customFunction={() => setActiveMenu((prev) => !prev)}
        color="blue"
        icon={<AiOutlineMenu />}
      />

      <div className="flex">
        <NavButton
          title="Cart"
          customFunction={() => handleClick("cart")}
          color="blue"
          icon={<FiShoppingCart />}
        />
        <NavButton
          title="Chat"
          customFunction={() => handleClick("chat")}
          color="blue"
          icon={<BsChatLeft />}
          dotColor="#03c9d7"
        />
        <NavButton
          title="Nofifications"
          customFunction={() => handleClick("notification")}
          color="blue"
          icon={<RiNotification3Line />}
          dotColor="#03c9d7"
        />
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick("userProfile")}
          >
            <img src={avatar} alt="avatar" className="rounded-full h-8 w-8" />
            <p>
              <span className="text-gray-400 text-14">Hi,</span>{" "}
              <span className="text-gray-400 font-bold ml-1 text-14">
                Michael
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
}

export default Navbar;
