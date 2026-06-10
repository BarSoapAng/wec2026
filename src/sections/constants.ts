export enum SectionId {
  NAVBAR = "navbar",
  HERO = "hero",
  SPONSORS = "sponsors",
  SCHEDULE = "schedule",
  ABOUT = "about",
  PROJECTS = "projects",
  FAQ = "faq",
  FOOTER = "footer",
}

export const navItems = [
  { label: "About", href: `#${SectionId.ABOUT}` },
  { label: "Sponsors", href: `#${SectionId.SPONSORS}` },
  { label: "Schedule", href: `#${SectionId.SCHEDULE}` },
  { label: "FAQ", href: `#${SectionId.FAQ}` },
];
