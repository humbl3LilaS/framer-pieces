import TestimonialInfo from "@/components/Testimonial/TestimonialInfo.tsx";
import Testimonials from "@/components/Testimonial/Testimonials.tsx";


export default function TestimonialSection(){

    return (
        <section className={"w-screen h-screen flex justify-center items-center bg-gray-100"}>
            <div className={"w-4/5 grid grid-cols-2 bg-white  gap-4"}>
                <TestimonialInfo/>
                <Testimonials/>
            </div>
        </section>
    )
}