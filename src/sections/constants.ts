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
  { label: "Home", href: `#${SectionId.HERO}` },
  { label: "About", href: `#${SectionId.ABOUT}` },
  { label: "Schedule", href: `#${SectionId.SCHEDULE}` },
  { label: "Sponsors", href: `#${SectionId.SPONSORS}` },
  { label: "FAQ", href: `#${SectionId.FAQ}` },
];
