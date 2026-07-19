export enum SectionId {
  NAVBAR = "navbar",
  HERO = "hero",
  SPONSORS = "sponsors",
  SCHEDULE = "schedule",
  MAP = "map",
  ABOUT = "about",
  PROJECTS = "projects",
  FAQ = "faq",
  FOOTER = "footer",
}

export const navItems = [
  { label: "About", href: `#${SectionId.ABOUT}` },
  { label: "Sponsors", href: `#${SectionId.SPONSORS}` },
  { label: "Schedule", href: `#${SectionId.SCHEDULE}` },
  { label: "Map", href: `#${SectionId.MAP}` },
  { label: "FAQ", href: `#${SectionId.FAQ}` },
];
