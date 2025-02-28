'use client';

import { ThemeContext } from '@/context/Theme.context';
import { useContext } from 'react';
export default function SkillsPreview({ resumeInfo }) {
  const { optimizedColor } = useContext(ThemeContext);

  return (
    <div className="my-6">
      <h2
        className="text-center py-2 border-b  font-bold text-xl mb-2"
        style={{
          color: optimizedColor,
        }}
      >
        Skills
      </h2>

      <div className="grid grid-cols-1">
        {resumeInfo?.titleSkills.map((titleSkills, index) => (
          <div key={index} className="my-1">
            <p className="text-xs my-1">{titleSkills?.description}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 my-1">
        {resumeInfo?.skills
          .filter(skill => skill.name.trim() !== '')
          .map((skill, index) => (
            <div key={index} className="flex items-center gap-4">
              <h2 className="text-[16px] w-[120px] truncate text-center ">
                {skill.name}{' '}
              </h2>
              <div className="rate flex gap-1">
                {skill.name == '' ? (
                  ''
                ) : (
                  <>
                    {[1, 2, 3, 4, 5].map(i => (
                      <div
                        key={i}
                        className={`size-[12px] rounded-full bg-gray-300 `}
                        style={{
                          backgroundColor:
                            i <= skill.rating ? optimizedColor : '#efefef',
                        }}
                      ></div>
                    ))}
                  </>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

// <div className="h-2 bg-gray-200 w-[120px]">
// <div
//   className="h-2"
//   style={{
//     backgroundColor: optimizedColor,
//     width: skill?.rating + '%',
//   }}
// ></div>
// </div>
