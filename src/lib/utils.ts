import {type ClassValue, clsx} from "clsx";
import {twMerge} from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function idResolver(id: number) {
    switch (id) {
        case 0:
            return "#zero";
        case 1:
            return "#one";
        case 2:
            return  "#two";
        case 3:
            return "#three";
        case   4:
            return "#four";
        case 5:
            return "#five";
        default: throw new Error("Invalid casing")
    }
}
