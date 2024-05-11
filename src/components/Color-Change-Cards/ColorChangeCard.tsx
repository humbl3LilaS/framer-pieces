import {motion} from "framer-motion";
import PoppingText from "./PoppingText.tsx";
import AnimatedIcon from "./AnimatedIcon.tsx";



const colorChangeVariants = {
    initial: {
        filter: "grayscale(1)"
    },
    hover: {
        filter: "grayscale(0)",
        transition: {
            duration: 0.6
        }
    }
};

export default function ColorChangeCard() {
    return (
        <motion.div className={"p-9 flex flex-col justify-end bg-colorChangeCard bg-cover"} variants={colorChangeVariants}  initial="initial" whileHover="hover">
            <AnimatedIcon/>
            <PoppingText content={"Plan"}/>
            <p className={"text-white"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at commodi eaque enim esse, harum mollitia
               nulla quae quis ut! Commodi </p>
        </motion.div>
    );
}