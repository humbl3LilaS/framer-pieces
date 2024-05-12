import {ReactNode} from "react";

type AnimatedFAQLayoutProps = {
    children: ReactNode;
}

export default function AnimatedFAQLayout({children}: AnimatedFAQLayoutProps) {
    return (
        <section className={"w-screen h-screen flex flex-col gap-y-8 justify-center items-center bg-zinc-700"}>
            {children}
        </section>
    );
}