type Page = {
    name: string;
    url: string;
};

const pages: Page[] = [
    { name: 'Home', url: '/' },
    { name: 'Über mich', url: '/about' },
    { name: 'Therapie', url: '/therapy' },
    { name: 'Kontakt', url: '/contact' }
];

export function getAllPages() {
    return pages;
}