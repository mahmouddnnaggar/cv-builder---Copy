export default function Label({ labelText }) {
  return (
    <div>
      <h3 className="w-fit mx-auto text-[#9B76ED] bg-[#9B76ED24] tracking-wide py-[5px] px-[10px] rounded-[5px] font-semibold text-[14px] mb-[20px]">
        {labelText}
      </h3>
    </div>
  );
}
