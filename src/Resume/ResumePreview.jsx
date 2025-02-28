'use client';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import { useContext } from 'react';
import PersonalDetailsPreview from './preview/PersonalDetailsPreview';
import SummeryPreview from './preview/SummeryPreview';
import ExperiencePreview from './preview/ExperiencePreview';
import EducationPreview from './preview/EducationPreview';
import SkillsPreview from './preview/SkillsPreview';
import ProjectsPreview from './preview/ProjectsPreview';
import CustomSectionPreview from './preview/CustomSectionPreview';
import { FontFamilyContext } from '@/context/FontFamily.context';
import { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { ThemeContext } from '@/context/Theme.context';
export default function ResumePreview() {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const { optimizedColor } = useContext(ThemeContext);

  const { resumeFont } = useContext(FontFamilyContext);

  const cvRef = useRef(null);

  const downloadPDF = async () => {
    if (!cvRef.current) return;

    const cvElement = cvRef.current;

    const canvas = await html2canvas(cvElement, {
      scale: 3,
      useCORS: true,
    });

    const imgData = canvas.toDataURL('image/jpeg', 0.8);

    const pdfWidth = 210;
    const imgWidth = pdfWidth;

    const imgHeight = (canvas.height * pdfWidth) / canvas.width;

    const pdf = new jsPDF('p', 'mm', [pdfWidth, imgHeight]);
    pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);
    pdf.save('my_resume.pdf');
  };

  console.log(optimizedColor);
  return (
    <div className="relative">
      <button
        className="btn px-4 py-1 my-4 absolute -top-16 right-16"
        onClick={() => {
          downloadPDF();
        }}
      >
        down
      </button>
      <div className="  overflow-auto p-10 flex justify-center ">
        <div
          ref={cvRef}
          className="shadow-lg  p-14   break-words "
          style={{
            borderColor: optimizedColor,
            minWidth: '794px',
            // maxWidth: "100%",

            fontFamily: resumeFont,
          }}
        >
          <PersonalDetailsPreview resumeInfo={resumeInfo} />
          <SummeryPreview resumeInfo={resumeInfo} />
          <ExperiencePreview resumeInfo={resumeInfo} />
          <EducationPreview resumeInfo={resumeInfo} />
          <SkillsPreview resumeInfo={resumeInfo} />
          <ProjectsPreview resumeInfo={resumeInfo} />
          <CustomSectionPreview resumeInfo={resumeInfo} />
        </div>
      </div>
    </div>
  );
}
