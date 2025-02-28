import Image from 'next/image';
import AnimationCard from '../AnimationCard/AnimationCard';
export default function OurToolsCard({ icon, title, desc, delay }) {
  return (
    <AnimationCard
      className={'feature w-[100%] md:w-[45%] lg:w-[30%] pl-[24px]'}
      delay={delay}
    >
      <Image src={icon} alt="clock-icon" className="mb-5" />
      <h3 className="text-black font-semibold text-[25px] mb-[15px] border-l-[2px] -ml-[24px] pl-[24px] border-black py-0">
        {title}
      </h3>
      <p className="text-[#888] text-[15px] leading-[1.8]">{desc}</p>
    </AnimationCard>
  );
}
