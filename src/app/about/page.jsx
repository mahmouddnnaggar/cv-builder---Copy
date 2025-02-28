import Headers from "@/components/Headers/Headers";
import LearnAboutUs from "@/components/LearnAboutUs/LearnAboutUs";
import TryOurCreativeTool from "@/components/TryOurCreativeTool/TryOurCreativeTool";
import React from "react";

export default function About() {
  return (
    <>
      <Headers title={"About us"} link={"Home"} description={"About us"} />
      <TryOurCreativeTool />
      <LearnAboutUs />
    </>
  );
}

export const dynamic = "force-dynamic"; // أضف ده عشان يخلي الصفحة ديناميكية