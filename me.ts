interface Me {
  firstName: String;
  middleName: String;
  lastName: String;
  prefferedName: String;
  email: String;
  town: String;
  city: String;
  postCode: String;
  bio: String;
}

interface Social {
  github: String;
  linkedIn: String;
  twitter: String;
}

export const me: Me = {
  firstName: "Nicholas",
  middleName: "David",
  lastName: "Martin",
  prefferedName: "Nick",
  email: "me@nickdmartin.com",
  town: "North Shields",
  city: "Newcastle upon Tyne",
  postCode: "NE29 6TA",
  bio: "I enjoy being outdoors and being active. I am a keen cyclist, runner and dinghy sailor and like nothing more that walking around the Northumberland coastline and countryside. I also like to take my progamming interests home with me, I like playing with robotics, analysing data and creating interesting visualisations. I'm a very amateur pianist.",
};

export const social: Social = {
  github: "https://github.com/n1ckdm",
  twitter: "https://twitter.com/ND_Martin",
  linkedIn: "https://www.linkedin.com/in/dr-nick-martin/",
};
