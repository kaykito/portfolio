const programming = [
  { id: 1, name: "Codeigniter", value: 95 },
  { id: 2, name: "Node.js", value: 50 },
  { id: 3, name: "JavaScript", value: 75 },
  { id: 4, name: "Laravel", value: 70 },
];
const language = [
  { id: 1, name: "English", value: 80 },
  { id: 2, name: "Indonesia", value: 95 },
  { id: 3, name: "Java", value: 85 },
  { id: 3, name: "Sunda", value: 50 },
];
const Skills = () => {
  return (
    <div className="tokyo_tm_progressbox w-full h-auto clear-both float-left bg-white pt-[93px] pr-[0px] pb-[100px] pl-[0px]">
      <div className="container">
        <div className="in w-full h-auto clear-both float-left flex">
          <div className="left w-1/2 pr-[50px]">
            <div className="tokyo_section_title w-full h-auto clear-both float-left mb-[40px]">
              <h3 className="text-[20px] font-bold">Programming Skills</h3>
            </div>
            <div className="tokyo_progress">
              {programming.map((skill) => (
                <div className="progress_inner" key={skill.id}>
                  <span>
                    <span className="label">{skill.name}</span>
                    <span className="number">{skill.value}%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div
                        className="bar_in"
                        style={{ width: `${skill.value}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="right w-1/2 pl-[50px]">
            <div className="tokyo_section_title w-full h-auto clear-both float-left mb-[40px]">
              <h3 className="text-[20px] font-bold">Language Skills</h3>
            </div>
            <div className="tokyo_progress">
              {language.map((skill) => (
                <div className="progress_inner" key={skill.id}>
                  <span>
                    <span className="label">{skill.name}</span>
                    <span className="number">{skill.value}%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div
                        className="bar_in"
                        style={{ width: `${skill.value}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
