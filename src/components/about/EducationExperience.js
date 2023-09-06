const experiencesData = [
  {
    id: 1,
    date: "2021 - Present",
    designation: "Teknisi",
    company: "PT Arkananta Global Media (SKNET)",
  },
  {
    id: 2,
    date: "2017 - 2021",
    designation: "Kepala Labkom",
    company: "SMK YPPT Majalengka",
  },
  {
    id: 3,
    date: "2016 - Present",
    designation: "Fullstack Developer & Networking",
    company: "FREELANCE",
  },
  {
    id: 4,
    date: "2015 - 2017",
    designation: "Web Designer, Analis",
    company: "InnovationsPT. Sima Soareka Indonesia",
  },
  {
    id: 5,
    date: "2015",
    designation: "Operator Komputer Server",
    company: "Tohaga Net",
  },
];
const educationData = [
  
  {
    id: 1,
    date: "2023 - Present",
    degree: "Teknik Informatika",
    institute: "Universitas Siber Muhammadiyah",
  },
  {
    id: 2,
    date: "2011 - 2014",
    degree: "Rekayasa Perangkat Lunak",
    institute: "SMK YPPT Majalengka",
  },
  {
    id: 3,
    date: "2008 - 2011",
    degree: "",
    institute: "SMPN 2 Majalengka",
  },
  {
    id: 4,
    date: "2002 - 2008",
    degree: "",
    institute: "SDN 2 Reco, Wonosobo",
  },
];

const EducationExperience = () => {
  return (
    <div className="tokyo_tm_resumebox w-full h-auto clear-both float-left bg-white py-[93px] px-0">
      <div className="container">
        <div className="in w-full h-auto clear-both float-left flex">
          <div className="left w-1/2 pr-[50px]">
            <div className="tokyo_section_title w-full h-auto clear-both float-left mb-[40px]">
              <h3 className="text-[20px] font-bold">Education</h3>
            </div>
            <div className="tokyo_tm_resume_list w-full h-auto clear-both float-left">
              <ul className="m-0 list-none relative inline-block pt-[10px]">
                {educationData.map((edu, i) => (
                  <li
                    className={`m-0 w-full float-left relative pl-[20px] ${
                      i == educationData.length - 1 ? "" : "pb-[45px]"
                    }`}
                    key={edu.id}
                  >
                    <div className="list_inner  w-full h-auto clear-both float-left relative flex">
                      <div className="time w-1/2 pr-[20px]">
                        <span className="inline-block py-[5px] px-[25px] bg-[rgba(0,0,0,.05)] rounded-[50px] text-[14px] whitespace-nowrap">
                          {edu.date}
                        </span>
                      </div>
                      <div className="place w-1/2 pl-[20px]">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          {edu.institute}
                        </h3>
                        <span className="text-[14px]">{edu.degree}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="right w-1/2 pl-[50px]">
            <div className="tokyo_section_title w-full h-auto clear-both float-left mb-[40px]">
              <h3 className="text-[20px] font-bold">Experience</h3>
            </div>
            <div className="tokyo_tm_resume_list w-full h-auto clear-both float-left">
              <ul className="m-0 list-none relative inline-block pt-[10px]">
                {experiencesData.map((exp, i) => (
                  <li
                    className={`m-0 w-full float-left relative pl-[20px] ${
                      i == experiencesData.length - 1 ? "" : "pb-[45px]"
                    }`}
                    key={exp.id}
                  >
                    <div className="list_inner  w-full h-auto clear-both float-left relative flex">
                      <div className="time w-1/2 pr-[20px]">
                        <span className="inline-block py-[5px] px-[25px] bg-[rgba(0,0,0,.05)] rounded-[50px] text-[14px] whitespace-nowrap">
                          {exp.date}
                        </span>
                      </div>
                      <div className="place w-1/2 pl-[20px]">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          {exp.company}
                        </h3>
                        <span className="text-[14px]">{exp.designation}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EducationExperience;
