import Headers from "@/components/Headers/Headers";
import ResumeInfoProvider from "@/context/ResumeInfoContext";
import FormSection from "@/Resume/FormSection";
import ResumePreview from "@/Resume/ResumePreview";


export default function template() {
  return (
    <>
      <Headers
        title={"Our Template"}
        link={"Home"}
        description={"Our Template"}
      />

      <div className="md:container-fluid ">
        <div className=" min-h-[100vh] py-40 grid grid-cols-1 lg:grid-cols-2 p-10 gap-10">
          
          {/* Form Section  */}
          <FormSection />
          {/* Preview Section  */}
          <div>
            <ResumePreview />
          </div>
        </div>
      </div>
    </>
  );
}
