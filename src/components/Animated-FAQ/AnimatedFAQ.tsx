import AnimatedFAQLayout from "./AnimatedFAQLayout.tsx";
import AnimatedBtn from "./AnimatedBtn.tsx";




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
        </AnimatedFAQLayout>
    );
}