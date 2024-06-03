import {motion, MotionValue, useTransform} from "framer-motion";


export default function StickyNav({scrollProgress}: {scrollProgress : MotionValue<number>}) {

    const background = useTransform(scrollProgress, [0, 0.99, 1], ["transparent", "transparent", "#000"]);
    const color = useTransform(scrollProgress, [0, 0.99, 1], ["#031a19", "#031a19", "#fff"]);

    return (
        <header>
            <motion.div className={"w-full h-16 p-4  fixed top-0 left-0 flex  justify-between items-center text-white bg-transparent z-40"}
                        style={{background}}

            >
                <motion.h1 className={"font-black text-xl tracking-wide"} style={{color}}>
                    Edelweiss
                </motion.h1>
                <button type={"button"} className={"px-4 py-2 bg-emerald-400 font-semibold "}>Sign In</button>
            </motion.div>

        </header>
    );
}