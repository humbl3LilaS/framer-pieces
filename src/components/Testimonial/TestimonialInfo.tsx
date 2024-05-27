import Steps from "@/components/Testimonial/Steps.tsx";

export default function TestimonialInfo() {
    return (
        <div className={"p-10 flex flex-col justify-center"}>
            <h2 className={"mb-6 text-5xl font-bold"}>What our customers think</h2>
            <p className={"mb-10 text-stone-600"}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda commodi eaque placeat temporibus!
                Asperiores aspernatur corporis dolor dolorem dolorum error exercitationem fugit hic incidunt, labore
                maxime officiis optio porro quis.
            </p>
            <Steps/>
        </div>
    );
}