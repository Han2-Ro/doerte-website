type Page = {
  name: string;
  url: string;
};

const pages: Page[] = [
  { name: "Home", url: "/" },
  { name: "Über mich", url: "/about" },
  { name: "Therapie", url: "/therapy" },
  { name: "Kosten", url: "/kosten" },
  { name: "Kontakt", url: "/contact" },
  { name: "Links", url: "/links" },
];

export function getAllPages() {
  return pages;
}
