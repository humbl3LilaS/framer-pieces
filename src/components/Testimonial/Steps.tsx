import {useStepsStore} from "@/store/stepsStore.ts";
import {useEffect} from "react";
import {motion, useAnimate} from "framer-motion";
import {idResolver} from "@/lib/utils.ts";


export default function Steps() {
    const {steps, mutateStep} = useStepsStore();
    const [scope, animate] = useAnimate();
    useEffect(() => {
        const interval = setInterval(() => {
            const stepAnimation = async () => {
                if (steps < 5) {
                    animate(`${idResolver(steps)}`, {width: "100%", backgroundColor: "rgb(239 68 68)"}, {duration: 1});

                } else {
                    await animate(`${idResolver(steps)}`, {
                        width: "100%",
                        backgroundColor: "rgb(239 68 68)"
                    }, {duration: 1});
                    await animate("div.absolute", {width: "0px", backgroundColor: "transparent"});
                }
                mutateStep();
            };
            stepAnimation();
        }, 1000);
        return () => clearInterval(interval);
    }, [steps, mutateStep, animate]);


    return (
        <motion.div className={"flex justify-between gap-x-3"} ref={scope}>
            <div className={"relative w-full h-4 border-2 border-red-500"}>
                <div id={"zero"} className={"absolute top-0 left-0 h-full w-0"}/>
            </div>
            <div className={"relative w-full h-4 border-2 border-red-500"}>
                <div id={"one"} className={"absolute top-0 left-0  h-full w-0"}/>
            </div>
            <div className={"relative w-full h-4 border-2 border-red-500"}>
                <div id={"two"} className={"absolute top-0 left-0  h-full w-0"}/>
            </div>
            <div className={"relative w-full h-4 border-2 border-red-500"}>
                <div id={"three"} className={"absolute top-0 left-0  h-full w-0"}/>
            </div>
            <div className={"relative w-full h-4 border-2 border-red-500"}>
                <div id={"four"} className={"absolute top-0 left-0  h-full w-0"}/>
            </div>
            <div className={"relative w-full h-4 border-2 border-red-500"}>
                <div id={"five"} className={"absolute top-0 left-0  h-full w-0"}/>
            </div>

        </motion.div>
    );
}