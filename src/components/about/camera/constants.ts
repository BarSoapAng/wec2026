import {
  JuniorDesign,
  Consulting,
  Programming,
  ReEngineering,
  BioEng,
} from "src/assets";

export type Competitions =
  | "juniorSeniorDesign"
  | "consulting"
  | "programming"
  | "reEngineering"
  | "bioEngineering";

export const CompetitionsList: Competitions[] = [
  "juniorSeniorDesign",
  "consulting",
  "programming",
  "reEngineering",
  "bioEngineering",
];

type CompetitionDescriptionEntry = {
  title: string;
  description: string;
  image: string;
};

export type TCompetitionDescription = Record<
  Competitions,
  CompetitionDescriptionEntry
>;

export const CompetitionDescription: TCompetitionDescription = {
  juniorSeniorDesign: {
    title: "Junior/Senior Design",
    description:
      "Teams are given a complex engineering problem and are required to design and build a working prototype. The teams will then present their solution and test their prototypes in front of a panel of judges. Junior Design is focused on mechanical design and implementation; Senior Design is focused on involving both mechanical and electrical components. While Junior Design is targeted towards students 2B and below, any student can choose to participate in Senior Design.",
    image: JuniorDesign,
  },
  consulting: {
    title: "Consulting",
    description:
      "Teams must design a detailed solution to an interdisciplinary engineering problem and construct a report. The teams will then pitch their solution to the client (judges). The focus is to simulate real engineering consulting scenarios and address various stakeholder pain points.",
    image: Consulting,
  },
  programming: {
    title: "Programming",
    description:
      "Teams must produce a software project to solve a posed problem. The teams will then present their solution to judges. The focus is on leveraging algorithms to build a thought out complete solution with the best application to real-world engineering settings.",
    image: Programming,
  },
  reEngineering: {
    title: "Re-Engineering",
    description:
      "Teams must apply the re-engineering process to an existing technology or design in order to add new functionality or enhance its original functionality. The teams will construct a report and present their solution to judges. Re-engineering focuses on applying creativity, practicality, and ingenuity to real-world repurposing contexts.",
    image: ReEngineering,
  },
  bioEngineering: {
    title: "Bio-Engineering",
    description:
      "Teams must solve a bio-engineering problem by applying bio-engineering techniques. Topics are typically related to healthcare, biological ecology, cellular engineering, etc. The teams will construct a report and present their solution to judges.",
    image: BioEng,
  },
};
