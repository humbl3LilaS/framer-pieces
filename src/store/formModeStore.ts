import {create} from "zustand";
import {immer} from "zustand/middleware/immer";

type State = {
    isIndividual: boolean
}

type Action = {
    toggle: () => void;
}

type FormModeStore = State & Action;

export const useFormModeStore = create<FormModeStore>()(
    immer((set) => ({
        isIndividual: true,
        toggle: () => (set(state => {
            state.isIndividual = !state.isIndividual;
        }))
    }))
);