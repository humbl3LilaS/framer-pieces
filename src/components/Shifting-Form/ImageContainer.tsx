import {AnimatePresence, motion} from "framer-motion";
import {useFormModeStore} from "@/store/formModeStore.ts";

const visibleImgVariant = {
    initial: {
        x: 0,
        opacity: 1,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 90,
        }
    },
    exit: {
        x: 50,
        opacity: 0,
        transition: {
            type: "spring",
            stiffness: 90,
        }
    },
};

const hiddenImageVariants = {
    initial: {
        x: -50,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 90,
        }
    },
    exit: {
        x: -50,
        opacity: 0,
        transition: {
            type: "spring",
            stiffness: 90,
        }
    }

};


export default function ImageContainer() {
    const {isIndividual} = useFormModeStore();
    return (
        <motion.div className={"w-full h-full bg-teal-500 relative  rounded-r-2xl overflow-hidden"}>
            <AnimatePresence mode={"sync"}>
                {isIndividual && <motion.div className={"w-full h-full absolute top-0"} variants={visibleImgVariant} initial={"initial"} animate={"animate"} exit={"exit"}>
                  <img
					src="https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
					alt="Team" className={"w-full h-full"}
                  />
				</motion.div>
                }
            </AnimatePresence>
            <AnimatePresence mode={"sync"}>
                {!isIndividual &&
                  <motion.div className={"w-full h-full absolute top-0"} variants={hiddenImageVariants}
                              exit={"exit"} animate={"animate"} initial={"initial"}>
					<img
                      src="https://images.pexels.com/photos/699459/pexels-photo-699459.jpeg"
                      alt="Team" className={"w-full h-full"}
					/>
                  </motion.div>
                }
            </AnimatePresence>
        </motion.div>

    );
}