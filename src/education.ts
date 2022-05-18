interface Education {
  institution: String;
  subject: String;
  level: String;
  grade: String;
  startDate: String;
  finishDate: String;
}

export const awards: String[] = [
  "Fellow of the Higher Education Academy",
  "Royal Aeronautical Society Cody Prize",
  "University of Surrey Hector Wainwright Prize",
];

export const eductaion: Education[] = [
  {
    institution: "Tauntons College",
    subject: "Mathematics, Physics, Electonics",
    level: "A-Level",
    grade: "BBC",
    startDate: "09/2003",
    finishDate: "07/2005",
  },
  {
    institution: "University of Surrey",
    subject: "Aerospace Engineering",
    level: "Undergraduate Degree",
    grade: "First Class (Hons)",
    startDate: "09/2005",
    finishDate: "06/2009",
  },
  {
    institution: "University of Surrey",
    subject:
      "Modelling, Design and Implementation of Synthetic Jets for Flow Control",
    level: "PhD",
    grade: "Pass",
    startDate: "09/2009",
    finishDate: "03/2013",
  },
];
