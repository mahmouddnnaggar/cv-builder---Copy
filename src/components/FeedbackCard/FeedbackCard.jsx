export default function FeedbackCard({ avatarImg, name, position, text }) {
  return (
    <div className="feedback border-2 border-[#eee] py-[30px] px-[20px] m-1 relative">
      <div className="stars flex gap-[3px] text-[16px] mb-[30px]">
        <i className="fa-solid fa-star text-[#f3961b]" />
        <i className="fa-solid fa-star text-[#f3961b]" />
        <i className="fa-solid fa-star text-[#f3961b]" />
        <i className="fa-solid fa-star text-[#f3961b]" />
        <i className="fa-solid fa-star text-[#f3961b]" />
      </div>
      <p className="text-[#888] font-medium text-[14px] leading-[1.8]">
        {text}
      </p>
      <div className="person flex gap-4 items-center mt-[20px]">
        <div className="avatar w-[70px] h-[70px] rounded-[5px] bg-gray-400"></div>
        <div className="info">
          <h4 className="text-black text-sm sm:text-[20px] font-semibold mb-[5px]">
            {name}
          </h4>
          <span className="text-[#888] font-medium text-[15px]">
            {position}
          </span>
        </div>
      </div>
      <div className="icon absolute bg-[#b2caf4] text-[#000] right-0 bottom-0 w-[90px] h-[90px] flex items-center justify-center text-[70px]">
        <i className="fa-solid fa-quote-right "></i>
      </div>
    </div>
  );
}
