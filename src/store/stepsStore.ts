import {create} from "zustand";
import {immer} from "zustand/middleware/immer";

type State = {
    steps: number;
}

type Action = {
    mutateStep: () => void;
}

type Store = State & Action;

export const useStepsStore = create<Store>()(
    immer(set => ({
        steps: 0,
        mutateStep: () => (set(state => {
            if (state.steps < 5) {
                state.steps = state.steps + 1;
            } else {
                state.steps = 0;
            }
        }))
    }))
);