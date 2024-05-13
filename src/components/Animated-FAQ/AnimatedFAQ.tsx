import AnimatedFAQLayout from "./AnimatedFAQLayout.tsx";
import AnimatedBtn from "./AnimatedBtn.tsx";

import FAQAccordion from "@/components/Animated-FAQ/FAQAccordion.tsx";

const FAQContent =
    {
        super: [
            {
                question: "Is it accessible?",
                answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque aut, deleniti error fuga fugit nesciunt reiciendis similique suscipit ullam! Sapiente!"
            },
            {
                question: "Is it cool?",
                answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque aut, deleniti error fuga fugit nesciunt reiciendis similique suscipit ullam! Sapiente!"
            },
            {
                question: "Is it lit?",
                answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque aut, deleniti error fuga fugit nesciunt reiciendis similique suscipit ullam! Sapiente!"
            }
        ],
        duper: [
            {
                question: "Is it duper accessible?",
                answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque aut, deleniti error fuga fugit nesciunt reiciendis similique suscipit ullam! Sapiente!"
            },
            {
                question: "Is it duper cool?",
                answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque aut, deleniti error fuga fugit nesciunt reiciendis similique suscipit ullam! Sapiente!"
            },
            {
                question: "Is it duper  lit?",
                answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque aut, deleniti error fuga fugit nesciunt reiciendis similique suscipit ullam! Sapiente!"
            }
        ],
        edelweiss: [
            {
                question: "Is it edelweiss accessible?",
                answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque aut, deleniti error fuga fugit nesciunt reiciendis similique suscipit ullam! Sapiente!"
            },
            {
                question: "Is it edelweiss cool?",
                answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque aut, deleniti error fuga fugit nesciunt reiciendis similique suscipit ullam! Sapiente!"
            },
            {
                question: "Is it edelweiss lit?",
                answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque aut, deleniti error fuga fugit nesciunt reiciendis similique suscipit ullam! Sapiente!"
            }
        ]
    };


export default function AnimatedFAQ() {
    return (
        <AnimatedFAQLayout>
            <div className={"flex flex-col-reverse items-center gap-y-4"}>
                <h1 className={"text-white text-3xl tracking-[5px]"}>FAQS</h1>
                <p className={"text-xl font-bold text-blue-400"}>Let's answer some questions</p>
            </div>
            <div className={"flex justify-center items-center gap-x-6"}>
                <AnimatedBtn id={"super"}>
                    Super
                </AnimatedBtn>
                <AnimatedBtn id={"duper"}>
                    Duper
                </AnimatedBtn>
                <AnimatedBtn id={"edelweiss"}>
                    Edelweiss
                </AnimatedBtn>
            </div>
            <FAQAccordion id={"super"} content={FAQContent["super"]}></FAQAccordion>
            <FAQAccordion id={"duper"} content={FAQContent["duper"]}></FAQAccordion>
            <FAQAccordion id={"edelweiss"} content={FAQContent["edelweiss"]}></FAQAccordion>
        </AnimatedFAQLayout>
    );
}