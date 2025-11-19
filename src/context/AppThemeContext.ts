import { createContext } from "react";
import type { AppThemeContextProps } from "@/types";

const AppThemeContext = createContext<AppThemeContextProps | undefined>(undefined);

export default AppThemeContext;
