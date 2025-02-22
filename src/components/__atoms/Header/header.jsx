import React, { useState } from "react";
import Logo from "../../../assets/images/logo.png";
import Cart from "../../../assets/icons/cart.png";
import User from "../../../assets/images/user.png";
import MenuIcon from "../../../assets/icons/burger.png";
import Delete from "../../../assets/icons/delete.png";
import CloseIcon from "../../../assets/icons/closeBurger.png";

function Header({ cartItems, setCartItems }) {
  const [cart, setCart] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleDelete = (productName) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.productName !== productName)
    );
  };

  const handleCheckoutClick = () => {
    window.open("https://midterm-exam-phi.vercel.app/");
  };

  return (
    <div className="w-full h-[100px] flex justify-between items-center border-b-[1px] ">
      <div className="md:hidden">
        <img
          className="cursor-pointer w-[30px] h-[30px]"
          src={menuOpen ? CloseIcon : MenuIcon}
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </div>

      <div className="flex gap-[56px]">
        <img className="w-[137px] h-[20px]" src={Logo} alt="Logo" />

        <div
          className={`md:flex gap-[32px] ${
            menuOpen
              ? "flex flex-col absolute top-[200px] left-0 w-full bg-white p-5 shadow-lg"
              : "hidden"
          }`}
        >
          <button className="cursor-pointer text-[#69707D] text-[15px] font-400">
            Collections
          </button>
          <button className="cursor-pointer text-[#69707D] text-[15px] font-400">
            Men
          </button>
          <button className="cursor-pointer text-[#69707D] text-[15px] font-400">
            Women
          </button>
          <button className="cursor-pointer text-[#69707D] text-[15px] font-400">
            About
          </button>
          <button className="cursor-pointer text-[#69707D] text-[15px] font-400">
            Contact
          </button>
        </div>
      </div>

      <div className="flex gap-[46px] items-center">
        <img
          onClick={() => setCart(!cart)}
          className="cursor-pointer w-[25px] h-[28px]"
          src={Cart}
        />
        <img className="cursor-pointer w-[50px] h-[50px]" src={User} />
      </div>

      {cart && (
        <div className="fixed right-[20px] top-[110px] md:right-[60px] p-5 flex flex-col w-[360px] h-[256px] rounded-[10px] bg-white shadow-lg">
          <div className="p-5 border-b-[1px]">
            <p className="text-[#1D2026] font-[700] text-[16px]">Cart</p>
          </div>
          {cartItems.length === 0 ? (
            <div className="p-5 items-center justify-center flex">
              <p className="text-[#69707D] text-[16px] font-[700]">
                Your cart is empty.
              </p>
            </div>
          ) : (
            cartItems.map((item, index) => (
              <div className="p-5 flex flex-col gap-2" key={index}>
                <div className="flex items-center gap-7">
                  <span className="text-[#69707D] font-[700] text-[16px]">
                    {item.productName}
                  </span>
                  <img
                    onClick={() => handleDelete(item.productName)}
                    className="w-[14px] h-[16px] cursor-pointer"
                    src={Delete}
                  />
                </div>
                <div className="flex gap-2">
                  <div>
                    <span className="text-[#69707D] text-[16px] font-400">
                      ${item.productPrice} x {item.count}
                    </span>
                  </div>
                  <div>
                    <span className="text-[#1D2026] font-[700] text-[16px]">
                      ${item.productPrice * item.count}
                    </span>
                  </div>
                </div>
                <div
                  onClick={handleCheckoutClick}
                  className="items-center flex justify-center w-[312px] h-[56px] rounded-[10px] bg-[#FF7E1B]  cursor-pointer"
                >
                  <button className="text-[#FFF] text-[16px] font-700">
                    Checkout
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default Header;
