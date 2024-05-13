import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion.tsx";
import {useBtnStateStore} from "@/store/btnStateStore.ts";
import {AnimatePresence, motion} from "framer-motion";

interface FAQContent {
    question: string;
    answer: string;
}

type FAQAccordionProps = {
    id: string;
    content: FAQContent[]
}

const FAQVariants = {
    initial: {
        display: "none",
        opacity: 0,
        y: 200
    },
    animate: {
        display: "block",
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.4,
            type: "spring",
            duration: 1
        }
    },
    exit: {
        display: "none",
        opacity: 0,
        y: 200,
        transition: {
            delay: 0.2,
            duration: 0.2
        }
    }
};

export default function FAQAccordion({id, content}: FAQAccordionProps) {
    const {active} = useBtnStateStore();
    return (
        <AnimatePresence mode={"popLayout"}>
            {active === id && (
                <motion.div variants={FAQVariants} initial={"initial"} animate={"animate"} exit={"exit"}>
                    <Accordion type={"single"} collapsible className={"w-[800px]"}>
                        {content.map(item => <AccordionItem value={item.question} key={item.question}
                                                            className={"px-4 mb-8 border-2 border-white rounded-2xl text-white font-bold text-xl  data-[state=open]:bg-white data-[state=open]:text-slate-950"}>
                            <AccordionTrigger>{item.question}</AccordionTrigger>
                            <AccordionContent className={"text-slate-600"}>
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>)}
                    </Accordion>
                </motion.div>)}
        </AnimatePresence>
    );
}