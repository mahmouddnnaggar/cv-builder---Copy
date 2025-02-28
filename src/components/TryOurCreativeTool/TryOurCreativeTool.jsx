import Label from '../Label/Label';
import Image from 'next/image';

import firstIcon from '../../assets/img/icons/icon-1.svg';
import secondIcon from '../../assets/img/icons/icon-2.svg';
import thirdIcon from '../../assets/img/icons/icon-3.svg';
import OurToolsCard from '../OurToolsCard/OurToolsCard';
import AnimationField from '../AnimationField/AnimationField';

export default function TryOurCreativeTool() {
  return (
    <div className="py-28">
      <div className="container">
        <AnimationField delay={0}>
          <Label labelText={'Try Our Creative Tool'} />
          <p className="w-[90%] md:w-[75%] text-center text-black text-[22px]  md:text-[39px] font-semibold mx-auto mb-[50px]">
            On-the-Fly Creative
            <span className="relative margin-block w-fit px-2 text-nowrap sm:text-nowrap">
              Resume and CV
              <svg
                className="absolute bottom-[-1.5px] -left-1 w-[104%] h-[40px] md:h-[60px] "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 500 150"
                preserveAspectRatio="none"
              >
                <path
                  className="under-line"
                  d="M15.2,133.3L15.2,133.3c121.9-7.6,244-9.9,366.1-6.8c34.6,0.9,69.1,2.3,103.7,4"
                  style={{ animationPlayState: 'running' }}
                ></path>
              </svg>
            </span>
            Builder ✍️ Across Your Favorite Tools
          </p>
        </AnimationField>
        <div className="features flex justify-center flex-wrap gap-[40px]">
          <OurToolsCard
            delay={0.3}
            icon={firstIcon}
            title={'Produces high-quality Resume content.'}
            desc={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam'
            }
          />
          <OurToolsCard
            delay={0.6}
            icon={secondIcon}
            title={'Offers Helpful Suggestions.'}
            desc={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam'
            }
          />
          <OurToolsCard
            delay={1}
            icon={thirdIcon}
            title={'Produces high-quality Resume content.'}
            desc={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam'
            }
          />
        </div>
      </div>
    </div>
  );
}
