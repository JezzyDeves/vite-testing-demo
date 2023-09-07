import { create } from "zustand";
import { FormSchema } from "../components/UserForm";
import { immer } from "zustand/middleware/immer";

const initialState = { formData: { username: "" } };

export const useFormDataStore = create<{
  formData: FormSchema;
  setFormData: (formData: FormSchema) => void;
  reset: () => void;
}>()(
  immer((set) => ({
    ...initialState,
    setFormData: (data) =>
      set((state) => {
        state.formData = data;
      }),
    reset() {
      set(initialState);
    },
  }))
);
