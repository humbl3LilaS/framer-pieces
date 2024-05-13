import {create} from "zustand";
import {immer} from "zustand/middleware/immer";



type State = {
    active: string | null;
}

type Action = {
    setActive: (btn: string) => void;
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