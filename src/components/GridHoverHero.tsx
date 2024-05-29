import {motion} from "framer-motion";

export default function GridHoverHero() {
    return (
        <section className={"relative h-screen w-screen bg-black"}>
            <div
                className={"h-full w-full absolute top-0 left-0 grid grid-cols-[repeat(auto-fit,_minmax(100px,_1fr))] grid-rows-[repeat(auto-fit,_minmax(100px,_1fr))]"}

            >
                {squareGenerator()}
            </div>
            <div className={"h-full w-full flex flex-col justify-center items-center  "}
            >
                <h1 className={"mb-10 text-white text-8xl font-black italic"}>Follow Your Passion</h1>
                <p className={"max-w-[60%] mb-8 text-center text-emerald-50 text-2xl "}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto corporis deserunt dolores
                   placeat, porro quas quibusdam quos saepe? Est expedita ipsa non omnis praesentium quae quasi quis quo
                   recusandae saepe!
                </p>
                <button type={"button"} className={"relative py-3 px-10 bg-emerald-700 text-3xl font-black text-white cursor-pointer z-10"}
                        onMouseEnter={e => {
                            e.stopPropagation();
                            console.log("hover")
                        }}
                >

                    Sign up
                </button>
            </div>
        </section>
    );
}


const squareVariant = {
    initial: {
        backgroundColor: "rgba(129, 140, 248, 0)"
    },
    hover: {
        backgroundColor: "rgba(129, 140, 248, 1)",
    },
    exit: {
        backgroundColor: "rgba(129, 140, 248, 0)",
        duration: 2
    }

};
const squareGenerator = () => {
    const squares = [];
    for (let i = 0; i <= 151; i++) {
        squares.push(
            <motion.div id={`square-${i}`} className={"w-full h-full border border-neutral-900"}
                        variants={squareVariant}
                        initial={"initial"} whileHover={"hover"}
                        transition={{duration: 1}}
                        role={"presentation"}
            />
        );
    }
    return squares;
};