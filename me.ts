interface Me {
  firstName: string;
  middleName: string;
  lastName: string;
  preferredName: string;
  pronouns: string;
  email: string;
  town: string;
  city: string;
  postCode: string;
  bio: string;
  country: string;
}

interface Social {
  github: string;
  linkedIn: string;
  twitter: string;
  dev: string;
}

export const me: Me = {
  firstName: "Nicholas",
  middleName: "David",
  lastName: "Martin",
  preferredName: "Nick",
  pronouns: "he/him",
  email: "me@nickdmartin.com",
  town: "North Shields",
  city: "Newcastle upon Tyne",
  postCode: "NE29 6TA",
  country: "UK",
  bio: "I enjoy being outdoors and being active. I am a keen cyclist, runner and dinghy sailor and like nothing more that walking around the Northumberland coastline and countryside. I also like to take my programming interests home with me, I like playing with robotics, analysing data and creating interesting visualisations. I'm a very amateur pianist.",
};

export const social: Social = {
  github: "https://github.com/n1ckdm",
  twitter: "https://twitter.com/ND_Martin",
  linkedIn: "https://www.linkedin.com/in/dr-nick-martin/",
  dev: "https://dev.to/n1ckdm",
};
