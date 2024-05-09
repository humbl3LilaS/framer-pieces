import {ReactNode} from "react";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({children}: LayoutProps) {
    return (
        <section className={"w-fit mx-auto my-10 grid grid-cols-revealCardCol grid-rows-revealCardRow gap-4"}>
            {children}
        </section>
    );
}