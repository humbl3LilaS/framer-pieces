import {motion, MotionValue} from "framer-motion";


export default function StickyNav({bgTransition, textTransition}: { bgTransition: MotionValue<string> , textTransition: MotionValue<string>}) {

    return (
        <header>
            <motion.div className={"w-full h-16 p-4  fixed top-0 left-0 flex  justify-between items-center text-white bg-transparent"}
                        style={{background: bgTransition}}

            >
                <motion.h1 className={"text-cyan-900 z-40"} style={{color: textTransition}}>
                    Edelweiss
                </motion.h1>
                <button type={"button"} className={"px-4 py-2 bg-emerald-400 font-semibold "}>Sign In</button>
            </motion.div>

        </header>
    );
}