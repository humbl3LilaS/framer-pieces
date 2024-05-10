import ColorChangeCard from "./ColorChangeCard.tsx";

export default function ColorChangeLayout() {
    return (
        <section>
            <div className={"w-fit mt-20 grid grid-cols-colorChangeCol grid-rows-colorChangeRow mx-auto gap-6"}

            >
                <ColorChangeCard/>
                <ColorChangeCard/>
                <ColorChangeCard/>
                <ColorChangeCard/>
            </div>
        </section>
    )
}