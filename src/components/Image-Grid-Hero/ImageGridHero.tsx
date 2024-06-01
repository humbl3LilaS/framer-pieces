import StickyNav from "@/components/Image-Grid-Hero/StickyNav.tsx";
import {useRef} from "react";
import {useScroll, useTransform} from "framer-motion";
import PhotoGrid from "@/components/Image-Grid-Hero/PhotoGrid.tsx";

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
            <StickyNav bgTransition={bgTransition} textTransition={textTransition}/>
            <section className={"w-screen h-[350vh] scroll-smooth"} ref={scrollRef}>
                <div className={"relative w-full h-full"}>
                    <PhotoGrid scrollProgress={scrollYProgress}/>
                </div>
            </section>
            <section className={"w-screen h-screen flex justify-center items-center bg-emerald-700"}>
                <h2 className={"text-stone-700 text-2xl"}>Other contents</h2>
            </section>
        </>
    );
}