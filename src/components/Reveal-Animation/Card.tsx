import {motion} from "framer-motion";
import AnimatedImage from "./AnimatedImage.tsx";

export default function Card() {
    return (
        <motion.div className={"grid relative grid-rows-2 grid-cols-2 overflow-hidden group/motion"} >
            <article className={"col-span-2 p-10 flex flex-col justify-center items-start gap-y-2   bg-black "}>
                <h2 className={"text-xl text-white font-bold"}>Espresso</h2>
                <p className={"text-white"}>We have pretty hot Espresso</p>
            </article>
            <AnimatedImage
                url="https://images.unsplash.com/photo-1559496417-e7f25cb247f3?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Expresso"/>
            <div className={"col-start-2 flex justify-center items-center gap-x-1"}>
                <button className={" peer hover:text-blue-400 duration-300 transition-colors"}>More</button>

                <svg xmlns="http://www.w3.org/2000/svg"
                     className={"aspect-square h-4 mt-1 peer-hover:fill-blue-500 duration-300 transition-all"}
                     viewBox="0 0 512 512">
                    <path
                        d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM294.6 135.1l99.9 107.1c3.5 3.8 5.5 8.7 5.5 13.8s-2 10.1-5.5 13.8L294.6 376.9c-4.2 4.5-10.1 7.1-16.3 7.1C266 384 256 374 256 361.7l0-57.7-96 0c-17.7 0-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32l96 0 0-57.7c0-12.3 10-22.3 22.3-22.3c6.2 0 12.1 2.6 16.3 7.1z"/>
                </svg>
            </div>
        </motion.div>
    );
}