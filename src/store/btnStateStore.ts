import {create} from "zustand";
import {immer} from "zustand/middleware/immer";

export type Btns = "super" | "duper" | "edelweiss" | null;

type State = {
    active: Btns;
}

type Action = {
    setActive: (btn: Btns) => void;
}

type BtnStateStore = State & Action;

export const useBtnStateStore = create<BtnStateStore>()(
    immer((set) => ({
        active: null,
        setActive: (btn) => set(state => {
            state.active = btn;
        })
    }))
);