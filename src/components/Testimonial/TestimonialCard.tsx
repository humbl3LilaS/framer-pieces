import {Testimonial} from "@/lib/testimonialProvider.ts";
import {motion} from "framer-motion";

import {idResolver} from "@/lib/utils.ts";

type Prop = {
    data: Testimonial
}

export default function TestimonialCard({data}: Prop) {
    return (
        <motion.div
            className={"py-10 px-14 shadow shadow-zinc-200  overflow-hidden testimonialCard"}
            id={`card${idResolver(data.id)}`}
            initial={data.id !== 0 ? {x: `calc(100% +(${data.id - 1} * 0.9rem))`, scaleY: 1.1} : undefined}
        >
            <img src={data.logo} alt={"logo of"} className={"mb-16 aspect-square h-24 mx-auto"}/>
            <p className={"mb-24 text-xl font-light italic"}>"{data.content}"</p>
            <div>
                <h3 className={"mb-2 text-xl font-bold"}>{data.name}</h3>
                <p className={"font-semibold"}>{data.position}</p>
            </div>
        </motion.div>
    );
}