import { create } from "zustand";

export interface StoreProps {
  globalState: {
    user: any;
    token: string | null;
  };
}

export const useStore = create<StoreProps>(() => ({
  globalState: {
    user: null,
    token: null,
    image: null,
  },
}));
