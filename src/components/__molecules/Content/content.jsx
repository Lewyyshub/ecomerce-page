import React, { useState } from "react";
import FirstShoe from "../../../assets/images/shoe1.png";
import SecondShoe from "../../../assets/images/shoe2.png";
import ThirdShoe from "../../../assets/images/shoe3.png";
import FourthShoe from "../../../assets/images/shoe4.png";
import Cart from "../../../assets/icons/cart2.png";

function Content({ addToCart }) {
  const [count, setCount] = useState(0);

  const Incrase = () => setCount(count + 1);
  const Decrase = () => setCount(count > 0 ? count - 1 : 0);

  const product = {
    productName: "Fall Limited Edition Sneakers",
    productPrice: 125,
    count: count,
  };

  const [mainShoe, setMainShoe] = useState(FirstShoe);

  const handleShoeClick = (shoe) => {
    setMainShoe(shoe);
  };
  return (
    <div className="flex flex-wrap justify-center mx-auto gap-[125px] pt-[100px] px-5">
      <div className="max-w-md">
        <img src={mainShoe} className="w-[445px] h-[445px] object-cover" />
        <div className="flex gap-4 mt-4 justify-center flex-wrap">
          <img
            className="w-[88px] h-[88px] rounded-[10px] cursor-pointer hover:opacity-50"
            src={FirstShoe}
            onClick={() => handleShoeClick(FirstShoe)}
          />
          <img
            className="w-[88px] h-[88px] rounded-[10px] cursor-pointer hover:opacity-50"
            src={SecondShoe}
            onClick={() => handleShoeClick(SecondShoe)}
          />
          <img
            className="w-[88px] h-[88px] rounded-[10px] cursor-pointer hover:opacity-50"
            src={ThirdShoe}
            onClick={() => handleShoeClick(ThirdShoe)}
          />
          <img
            className="w-[88px] h-[88px] rounded-[10px] cursor-pointer hover:opacity-50"
            src={FourthShoe}
            onClick={() => handleShoeClick(FourthShoe)}
          />
        </div>
      </div>

      <div className="flex flex-col gap-[28px] max-w-md">
        <p className="text-[#FF7E1B] text-[13px] font-[700]">SNEAKER COMPANY</p>
        <h1 className="text-[#1D202] text-[44px] font-[700] leading-tight">
          Fall Limited Edition <br /> Sneakers
        </h1>
        <span className="text-[#69707D] text-[16px]">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </span>

        <div className="flex items-center gap-2">
          <h1 className="text-[28px] font-[700]">$125.00</h1>
          <div className="bg-[#FFEEE2] rounded-[6px] w-[51px] h-[27px] text-[16px] font-[700] text-[#FF7E1B] flex items-center justify-center">
            50%
          </div>
        </div>
        <span className="text-[#B6BCC8] text-[16px] font-[700] line-through">
          $250.00
        </span>

        <div className="flex flex-col md:flex-row gap-[16px] items-center">
          <div className="w-[270px] md:w-[157px] h-[56px] flex bg-[#F6F8FD] rounded-[10px] items-center justify-evenly">
            <p
              onClick={Decrase}
              className="cursor-pointer text-[30px] text-[#FF7E1B] hover:text-[#FFAB6A]"
            >
              -
            </p>
            <p className="text-[16px] font-[700] text-[#1D2026]">{count}</p>
            <p
              onClick={Incrase}
              className="cursor-pointer text-[30px] text-[#FF7E1B] hover:text-[#FFAB6A]"
            >
              +
            </p>
          </div>
          <button
            onClick={() => addToCart(product)}
            className="cursor-pointer hover:opacity-50 w-[272px] h-[56px] rounded-[10px] bg-[#FF7E1B] flex items-center justify-center gap-[15px]"
          >
            <img className="w-[17px] h-[16px]" src={Cart} alt="Cart Icon" />
            <p className="text-[#fff] text-[16px] font-[700]">Add to cart</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Content;
