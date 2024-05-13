import ShiftingForm from "@/components/Shifting-Form/ShiftingForm.tsx";
import ImageContainer from "@/components/Shifting-Form/ImageContainer.tsx";

export default function ShiftingFromSection() {
    return (
        <section className={"w-screen h-screen flex justify-center items-center"}>
            <div className={"grid grid-cols-shiftingForm"}>
                <ShiftingForm/>
                <ImageContainer/>
            </div>
        </section>
    )
}