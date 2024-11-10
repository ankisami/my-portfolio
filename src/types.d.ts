export type AboutItem = {
  label: string;
  number: number;
};

export type SocialLink = {
  href: string;
  icon: React.ReactNode;
  alt: string;
};

export type Skill = {
  imgSrc: string;
  label: string;
  desc: string;
};

export type Work = {
  imgSrc: string;
  title: string;
  tags: string[];
  projectLink: string;
};

export type Link = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  link: string;
};

export type Review = {
  content: string;
  name: string;
  imgSrc: string;
  job: string;
  company: string;
  linkedin: string;
};
