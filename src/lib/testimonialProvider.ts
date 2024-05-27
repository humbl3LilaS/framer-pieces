export interface Testimonial {
    id: number;
    logo: string;
    content: string;
    name: string;
    position: string;
}


export const data: Testimonial[] = [
    {
        id: 0,
        logo: "/logo/discord.svg",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam corporis cum eos facilis itaque libero magnam nisi officia porro ratione saepe, sequi sint sit temporibus unde velit vero. Possimus.",
        name: "Wane Roony",
        position: "UX Engineer, Discord"
    },
    {
        id: 1,
        logo: "/logo/meta.svg",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam corporis cum eos facilis itaque libero magnam nisi officia porro ratione saepe, sequi sint sit temporibus unde velit vero. Possimus.",
        name: "Tom Holland",
        position: "Product Engineer, Meta"
    },
    {
        id: 2,
        logo: "/logo/shopify.svg",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam corporis cum eos facilis itaque libero magnam nisi officia porro ratione saepe, sequi sint sit temporibus unde velit vero. Possimus.",
        name: "Tommy Shelby",
        position: "Project Team Lead, Shopify"
    },
    {
        id: 3,
        logo: "/logo/slack.svg",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam corporis cum eos facilis itaque libero magnam nisi officia porro ratione saepe, sequi sint sit temporibus unde velit vero. Possimus.",
        name: "Jame Guns",
        position: "Senior FE engineer, Slack"
    },

    {
        id: 4,
        logo: "/logo/stack-overflow.svg",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam corporis cum eos facilis itaque libero magnam nisi officia porro ratione saepe, sequi sint sit temporibus unde velit vero. Possimus.",
        name: "Aimer",
        position: "CTO, Stack Overflow"
    },
    {
        id: 5,
        logo: "/logo/telegram.svg",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam corporis cum eos facilis itaque libero magnam nisi officia porro ratione saepe, sequi sint sit temporibus unde velit vero. Possimus.",
        name: "Taylor Swift",
        position: "Database Administrator, telegram"
    },
];