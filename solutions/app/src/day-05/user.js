import { dateString } from "./date-string";

export const user = {
  name: "Piouson",
  role: "Developer",
  location: "Manchester UK",
  skills: [
    "HTML",
    "CSS",
    "Sass",
    "Bootstrap",
    "JavaScript",
    "jQuery",
    "TypeScript",
    "React",
    "Redux",
    "Material-UI",
    "Node",
    "Express",
    "MongoDB",
    "Jest",
    "PostgreSQL",
    "Mocha",
    "Docker",
    "Git",
    "Cypress",
  ],
  dateJoined: dateString(new Date()),
};
