"use client";

const journey = [
  {
    years: "2022 - Present",
    title: "Bachelor of Science in Computer Science",
    institution: "Cavite State University",
  },
  {
    years: "2020 - 2022",
    title: "Senior High School",
    institution: "Southern Philippines Institute of Science andTechnology",
  },
  {
    years: "2016 - 2020",
    title: "Junior High School",
    institution: "General Emilio Aguinaldo National High School",
  },
];

const Journey = () => {
  return (
    <div className="flex flex-col">
      <h2 className="h2 mb-8">
        Education & <span className="text-tertiary">Experience</span>
      </h2>
      {journey.map((item, index) => {
        const { years, title, institution } = item;
        return (
          <div key={index} className="flex items-center gap-12 w-full">
            <div className="flex flex-col w-max justify-center items-center">
              <div className="w-3 h-3 bg-accent rounded-full"></div>
              <div className="w-[1px] h-[180px] bg-white/10"></div>
            </div>
            {/* text */}
            <div className="max-w-[500px]">
              <p className="mb-6 text-lg text-white/50">{years}</p>
              <h4 className="h4 mb-2">{title}</h4>
              <p className="text-lg text-white/50">{institution}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Journey;
