import StickyNav from "@/components/Image-Grid-Hero/StickyNav.tsx";
import {useRef} from "react";
import {useScroll, useTransform} from "framer-motion";

export default function ImageGridHero() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target: scrollRef,
        offset: ["start start", "end end"],
    });

    const bgTransition = useTransform(scrollYProgress, [0, 0.99, 1], ["#fff", "#fff", "#000"]);
    const textTransition = useTransform(scrollYProgress, [0, 0.99, 1], ["#000", "#000", "#fff"]);
    return (
        <>
            <section className={"w-screen h-[200vh] scroll-smooth"} ref={scrollRef}>
                <StickyNav bgTransition={bgTransition} textTransition={textTransition}/>
            </section>
            <section className={"w-screen h-screen flex justify-center items-center bg-emerald-700"}>
                <h2 className={"text-stone-700 text-2xl"}>Other contents</h2>
            </section>
        </>
    );
}