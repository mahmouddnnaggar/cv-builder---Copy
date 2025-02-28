import Headers from "@/components/Headers/Headers";
import OurMAinFeatures from "@/components/OurMainFeatures/OurMainFeatures";
import OurPricingPlans from "@/components/OurPricingPlans/OurPricingPlans";

export default function pricing() {
  return (
    <>
      <Headers title={"Our Pricing"} link={"Home"} description={"Pricing"} />
      <OurPricingPlans />
      <OurMAinFeatures />
    </>
  );
}
