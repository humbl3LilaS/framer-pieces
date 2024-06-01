import {motion, MotionValue, useTransform} from "framer-motion";
import {twMerge} from "tailwind-merge";

export default function PhotoGrid({scrollProgress}: { scrollProgress: MotionValue<number> }) {
    return (
        <motion.div
            className={"w-screen h-screen p-4 sticky top-0  grid grid-cols-3 grid-rows-3 gap-6 overflow-hidden z-0"}
        >
            <PhotoDiv photoSrc={"/src/assets/bg2.jpg"}
                      translateX={"-25%"} translateY={"-25%"}
                      scrollProgress={scrollProgress}
                      className={"col-span-2"}
            />

            <PhotoDiv translateX={"25%"}
                      translateY={"-25%"}
                      photoSrc={"/src/assets/bg1.jpg"}
                      scrollProgress={scrollProgress}
                      className={"row-span-2"}
            />

            <PhotoDiv photoSrc={"/src/assets/bg3.jpg"}
                      translateX={"-25%"}
                      translateY={"25%"}
                      scrollProgress={scrollProgress}
                      className={"row-span-2"}
            />

            <PhotoDiv photoSrc={"/src/assets/bg4.jpg"}
                      translateX={"25%"}
                      translateY={"-135%"}
                      scrollProgress={scrollProgress}
            />

            <PhotoDiv photoSrc={"/src/assets/bg5.jpg"}
                      translateX={"-25%"}
                      translateY={"25%"}
                      scrollProgress={scrollProgress}/>

            <PhotoDiv photoSrc={"/src/assets/bg6.jpg"}
                      translateX={"25%"}
                      translateY={"25%"}
                      scrollProgress={scrollProgress}
            />
        </motion.div>
    );
}

type PhotoDivProps = {
    translateX: string | number,
    translateY: string | number,
    photoSrc: string,
    className?: string,
    scrollProgress: MotionValue<number>
}

function PhotoDiv({translateX, translateY, photoSrc, className, scrollProgress}: PhotoDivProps) {
    const scale = useTransform(scrollProgress, [0, 1], [0.5, 1]);
    const x = useTransform(scrollProgress, [0, 1], [translateX, "0%"]);
    const y = useTransform(scrollProgress, [0, 1], [translateY, "0%"]);
    return (
        <motion.div className={twMerge("relative bg-cover bg-center", className)}
                    style={{backgroundImage: `url('${photoSrc}')`, scale, x, y}}
        />
    );
}