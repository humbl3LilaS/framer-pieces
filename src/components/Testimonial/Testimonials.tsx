import TestimonialCard from "@/components/Testimonial/TestimonialCard.tsx";
import {data} from "@/lib/testimonialProvider.ts";
import {motion, useAnimate} from "framer-motion";
import {useEffect} from "react";
import {useStepsStore} from "@/store/stepsStore.ts";
import {idResolver} from "@/lib/utils.ts";

export default function Testimonials() {
    const testimonials = data;
    const {steps} = useStepsStore();
    const [scope, animate] = useAnimate();
    useEffect(() => {
        const interval = setInterval(() => {
            const animateCard = async () => {
                if (steps < 5) {
                    animate(`#card${idResolver(steps)}`, {x: 0, scaleY: 1}, {duration: 0.4});
                } else {
                    await animate(`#card${idResolver(steps)}`, {x: 0, scaleY: 1}, {duration: 0.4});
                    setTimeout(() => {
                        for (let i = 1; i <= 5; i++) {
                            animate(`#card${idResolver(i)}`, {
                                x: `calc(100% + ${i - 1} * 0.9rem)`,
                                scaleY: 1.1
                            });
                        }
                    }, 3000);
                }
            };
            animateCard();
        }, 2600);
        return () => clearInterval(interval);
    }, [steps, animate]);
    return (
        <motion.div className={"relative"} ref={scope}>
            {testimonials.map(testimonial => <TestimonialCard data={testimonial} key={testimonial.id}/>)}
        </motion.div>
    );
}