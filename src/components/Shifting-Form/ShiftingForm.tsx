import {useFormModeStore} from "@/store/formModeStore.ts";
import {cn} from "@/lib/utils.ts";
import {AnimatePresence, motion} from "framer-motion";

// const hiddenBlockVariants = {
//     initial: {
//         y: -100,
//         opacity: 0,
//     },
//     animate: {
//
//         y: 0,
//         opacity: 1,
//         transition: {
//             duration: 0.5
//         }
//     },
//     exit: {
//         opacity: [0.5, 0, 0],
//         y: [0, -100, -200],
//         transition: {
//             duration: 0.5
//         }
//     }
// };

const hiddenBlockVariants = {
    initial: {
        y: -100,
        display: "none"
    },
    animate: {
        y: 0,
        display: "block",
        transition: {
            duration: 0.5
        }
    },
    exit: {
        display: "none",
        y: -100,
        opacity: 0,
        transition: {
            type: "spring",
            stiffness: 100,

        }
    }
};

export default function ShiftingForm() {
    const {isIndividual, toggle} = useFormModeStore();
    return (
        <div className={"p-8 rounded-l-2xl bg-blue-900"}>
            <h1 className={"mb-4 text-4xl font-bold text-white"}>Contact Us</h1>
            <form className={"flex flex-col items-center gap-y-10"}>
                <div className={"w-full *:w-full *:block"}>
                    <label htmlFor={"name"} className={"mb-4 text-2xl text-white font-bold"}>Hi 👋! My name is...</label>
                    <input type={"text"} id={"name"}
                           className={"py-2 px-4 bg-blue-600 border-none placeholder:text-cyan-400 rounded-md"}
                           placeholder={"Your name..."}
                    />
                </div>
                <motion.div className={"w-full *:w-full *:block"}>
                    <label className={"mb-4 text-2xl text-white font-bold"}>and I represent</label>
                    <div>
                        <button
                            className={cn("px-4 py-2  border border-white rounded-l-md font-bold text-white", isIndividual ? "bg-white text-cyan-900" : "bg-transparent")}
                            onClick={() => toggle()}
                            type={"button"}
                        >
                            An Individual
                        </button>
                        <button
                            className={cn("px-4 py-2  border border-white rounded-r-md font-bold text-white", !isIndividual ? "bg-white text-cyan-900" : "bg-transparent")}
                            onClick={() => toggle()}
                            type={"button"}
                        >
                            A Company
                        </button>
                    </div>
                    <AnimatePresence mode={"popLayout"}>
                        {!isIndividual && (
                            <motion.div className={"w-full *:w-full *:block"}
                                        variants={hiddenBlockVariants}
                                        initial={"initial"} animate={"animate"} exit={"exit"}
                            >
                                <label htmlFor={"companyName"} className={"mb-4 text-2xl text-white font-bold"}>By the
                                                                                                                name
                                                                                                                of...</label>
                                <input type={"text"} id={"companyName"}
                                       className={"py-2 px-4 bg-blue-600 border-none placeholder:text-cyan-400 rounded-md"}
                                       placeholder={"Your company name..."}
                                />
                            </motion.div>)
                        }
                    </AnimatePresence>
                    {/*<motion.div className={"w-full *:w-full *:block"}*/}
                    {/*            variants={hiddenBlockVariants}*/}
                    {/*            initial={"initial"} animate={!isIndividual ? "animate" : "exit"}*/}
                    {/*>*/}
                    {/*    <label htmlFor={"companyName"} className={"mb-4 text-2xl text-white font-bold"}>By the*/}
                    {/*                                                                                    name*/}
                    {/*                                                                                    of...</label>*/}
                    {/*    <input type={"text"} id={"companyName"}*/}
                    {/*           className={"py-2 px-4 bg-blue-600 border-none placeholder:text-cyan-400 rounded-md"}*/}
                    {/*           placeholder={"Your company name..."}*/}
                    {/*    />*/}
                    {/*</motion.div>*/}
                </motion.div>

                <motion.div className={"w-full *:w-full *:block"}>
                    <label
                        htmlFor={"description"}
                        className={"mb-4 text-2xl text-white font-bold"}
                    >
                        I'd love to ask about...
                    </label>
                    <textarea className={"py-2 px-4 h-36  bg-blue-600 border-none placeholder:text-cyan-400 rounded-md"}
                              id={"description"}
                              placeholder={"Your desire...."}
                    />
                </motion.div>
                <motion.button type={"submit"} className={"w-full py-2 bg-blue-600 rounded-md text-white font-bold"}>
                    Submit
                </motion.button>
            </form>
        </div>
    );
}