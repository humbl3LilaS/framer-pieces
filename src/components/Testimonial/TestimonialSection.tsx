import TestimonialInfo from "@/components/Testimonial/TestimonialInfo.tsx";
import Testimonials from "@/components/Testimonial/Testimonials.tsx";


export default function TestimonialSection(){
    return (
        <section className={"w-screen h-screen flex justify-center items-center bg-gray-100 overflow-clip"}>
            <div className={"w-[90%] grid grid-cols-2 bg-white  gap-8"}>
                <TestimonialInfo/>
                <Testimonials/>
            </div>
        </section>
    )
}