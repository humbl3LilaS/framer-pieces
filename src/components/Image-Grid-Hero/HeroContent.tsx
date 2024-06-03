import {motion, MotionValue, useTransform} from "framer-motion";

export default function HeroContent({scrollProgress}: { scrollProgress: MotionValue<number> }) {
    const scale = useTransform(scrollProgress, [0, 0.5, 1], [1, 0.75, 0.5]);
    const opacity = useTransform(scrollProgress, [0, 0.8, 0.5, 1], [1, 0.8, 0.5, 0]);

    return (
        <motion.div
            className={"w-screen h-screen absolute top-0 z-20 flex flex-col justify-center items-center gap-y-10"}
            style={{opacity, scale}}
        >
            <h1 className={"text-4xl font-black"}>All Hail The Royal Edelweiss</h1>
            <p className={"max-w-[650px] text-xl font-normal text-center text-cyan-900"}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolorem eligendi enim facere id illo
                minima quaerat qui temporibus veniam.
            </p>
            <div className={"max-w-[650px]"}>
                <button className={"py-2 px-4 bg-blue-600 text-white font-semibold text-xl tracking-wide"}>Contact Us
                </button>
                <button className={"py-2 px-4 text-stone-700 font-semibold text-xl tracking-wide"}>Learn More</button>
            </div>
        </motion.div>
    );
}