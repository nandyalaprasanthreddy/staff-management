import { createContext } from "react";
import type { ContextAPIProps } from "./Hook.types";

export const AuthContext = createContext<ContextAPIProps | undefined>(
  undefined
);
