import { create } from "zustand";

export const useStore = create(() => ({
  globalState: {
    user: null,
    token: null,
    image: null,
  },
}));
