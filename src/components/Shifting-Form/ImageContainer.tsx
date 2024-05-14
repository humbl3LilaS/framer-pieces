import {AnimatePresence, motion} from "framer-motion";
import {useFormModeStore} from "@/store/formModeStore.ts";


export default function ImageContainer() {
    const {isIndividual} = useFormModeStore();
    return (
        <motion.div className={"w-full h-full bg-teal-500 rounded-r-2xl overflow-hiddens"}>
            <AnimatePresence>
                {!isIndividual && (
                    <motion.div className={"rounded-r-2xl"}
                                initial={{x: -100}}
                                animate={{x: 0, transition: {type: "spring", stiffness: 100, damping: 15}}}
                                exit={{x: "-50%", opacity: 0, transition: {type: "spring", stiffness: 100, damping: 15}}}
                    >
                        <img
                            src="https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt="Team"
                            className={"w-full h-full rounded-r-2xl"}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
            <AnimatePresence>
                {isIndividual && (
                    <motion.div
                        initial={{x: "0"}}
                        animate={{x: 0, transition: {type: "spring", stiffness: 100, damping: 15}}}
                        exit={{x: "200%", opacity: 0, transition: {type: "spring", stiffness: 100, damping: 15}}}
                    >
                        <img src="https://images.pexels.com/photos/699459/pexels-photo-699459.jpeg" alt="Work space"
                             className={"w-full h-full rounded-r-2xl"}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

        </motion.div>
    );
}