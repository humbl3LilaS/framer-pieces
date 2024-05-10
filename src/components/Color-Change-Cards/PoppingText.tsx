import {motion} from "framer-motion";

interface PoppingTextProps {
    content: string;
}

const contentVariants = {
    initial: {
        y: 0
    },
    hover: {
        y: -23,
        transition: {
            duration: 0.6,
            staggerChildren: 0.1,

        }
    }

};

const contentChildVariants = {
    initial : {
        y: 0,
    },
    hover: {
        y: -10,
        transition: {
            duration: 0.2
        }
    }
}

export default function PoppingText({content}: PoppingTextProps) {
    return (
        <div className={"h-[32px] relative text-white font-bold text-2xl overflow-hidden"} role="heading" aria-level={1}>
            <motion.h1 variants={contentVariants}>
                {[...content].map((item,idx) =>
                    <motion.span key={`${item + idx}`} className={"inline-block"} variants={contentChildVariants}>{item}</motion.span>)
                }
            </motion.h1>
            <motion.h1 variants={contentVariants}>
                {[...content].map((item, idx) =>
                    <motion.span key={`${item + idx}`} className={"inline-block"}
                                 variants={contentChildVariants}>{item}</motion.span>)
                }
            </motion.h1>
        </div>
    );
}