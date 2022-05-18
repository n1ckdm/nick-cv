interface Publication {
  journal: String;
  title: String;
  year: Number;
}

export const publications: Publication[] = [
  {
    journal: "Journal of Aerospace Engineering",
    title: "Experimental Flow Control Using Synthetic Jet Actuators",
    year: 2019,
  },
  {
    journal: "AIAA Journal",
    title:
      "Switching of a Bistable Diverter Valve with Synthetic Jet Actuators",
    year: 2014,
  },
  {
    journal: "Journal of Fluid Mechanics",
    title: "Tracer particle momentum effects in vortex flows",
    year: 2013,
  },
];
