interface work {
  company: string;
  role: string;
  startDate: string;
  finishDate: string | null;
  description: string;
}

export const work: work[] = [
  {
    company: "Toyota Motorsport Gmbh",
    role: "Junior Aerodynamicist",
    startDate: "07/2007",
    finishDate: "09/2008",
    description:
      "I worked as part of the Toyota Formula One team during the development of their 2008 car (TF108).  During the 100 hours of wind tunnel testing which I oversaw, I worked on the aerodynamic development of the car. This included the planning of test schedules and liaising with model designers. I was responsible for reporting the aerodynamic performance of the current wind tunnel model of the formula one car. I used a number of key performance indices to to track the car's development.",
  },
  {
    company: "University of Surrey",
    role: "PhD Candidate",
    startDate: "09/2009",
    finishDate: "04/2013",
    description:
      "Researching synthetic jet actuators and their application to aerodynamic flow control. Commissioning and ongoing development of the low speed aerodynamics wind tunnel at the University of Surrey. Writing and maintaining data acquisition and analysis software for complex turbulent flow measurement.",
  },
  {
    company: "Williams F1",
    role: "Aerodynamicist",
    startDate: "04/2013",
    finishDate: "07/2017",
    description:
      "Developing sophisticated, predictive models of the aerodynamics of the formula one car. Creating software tools to for visualisation and analysis of wind tunnel data, with exposure to C++, C# and Python. Applying machine learning techniques to large wind tunnel datasets in order to improve race car performance. Designing, wind tunnel testing and analysing aerodynamic components of the race car.",
  },
  {
    company: "Northumbria University",
    role: "Senior Lecturer in Aerodynamics",
    startDate: "07/2017",
    finishDate: "03/2019",
    description:
      "Delivering the teaching and learning content for undergraduate modules including: Numerical and analytical dynamics (with Python), Vehicle performance modelling and Vehicle aerodynamics. Conducting research into aerodynamics with machine learning applications, current research interests include: vehicle platooning and control, machine learning surrogate modelling for experimental data, synthetic jet and plasma actuators.",
  },
  {
    company: "Tharsus",
    role: "Senior Software Engineer",
    startDate: "03/2019",
    finishDate: null,
    description:
      "Leading the software architecture and development of Smart Machine and Robotics systems. Building a team culture that allows excellent, high performaing individuals to work together to produce inovative software solutions. Helping people within the team achieve their goals and career asparations.",
  },
];
