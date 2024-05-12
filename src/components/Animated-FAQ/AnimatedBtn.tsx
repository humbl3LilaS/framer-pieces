import {motion} from "framer-motion";
import {ReactNode} from "react";
import {twMerge} from "tailwind-merge";
import {Btns, useBtnStateStore} from "../../store/btnStateStore.ts";

type AnimatedBtnProps = {
    className?: string;
    children: ReactNode;
    id: Btns,
}

const animatedBtnVariants = {
    initial: {
        backgroundSize: "100% 0%",
        backgroundPositionY: "bottom 0px"
    },
    animate: {
        backgroundImage: "linear-gradient(to right top, #5e13ec, #6f12ec, #7d11ec, #8a11eb, #9612eb)",
        backgroundSize: "100% 100%",
        transition: {
            duration: 0.5,
            type: "spring"
        }
    }
};

export default function AnimatedBtn({className, children, id}: AnimatedBtnProps) {
    const {active, setActive} = useBtnStateStore();
    const btnHandler = () => {
        setActive(id);
    };
    return (
        <motion.button onClick={btnHandler}
                       className={twMerge("py-2 px-5 border border-cyan-300 rounded-md font-bold text-white bg-no-repeat", className)}
                       variants={animatedBtnVariants}
                       initial="initial"
                       animate={id === active ? "animate" : "initial"}
        >
            {children}
        </motion.button>
    );

}