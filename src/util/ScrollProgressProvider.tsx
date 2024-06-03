import {createContext, Dispatch, ReactNode, SetStateAction, useContext, useState} from "react";
import {MotionValue, useMotionValue} from "framer-motion";

interface ScrollProgressProvider {
    content: MotionValue<number>,
    setContent: Dispatch<SetStateAction<MotionValue<number>>>
}

const ScrollProgress = createContext<ScrollProgressProvider | null>(null);

export default function ScrollProgressProvider({children}: { children: ReactNode }) {
    const [content, setContent] = useState(useMotionValue(0));
    return (
        <ScrollProgress.Provider value={{content, setContent}}>
            {children}
        </ScrollProgress.Provider>
    );

}

export const useScrollProgress = () => {
    const scrollProgress = useContext(ScrollProgress);
    if (!scrollProgress) {
        throw new Error("useScrollProgress can only be used inside the descendent of ScrollProgressProvider");
    }
    return scrollProgress;}