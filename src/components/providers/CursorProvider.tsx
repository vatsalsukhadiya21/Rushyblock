"use client";

import React, { createContext, useContext, useState } from "react";

export type CursorState = "default" | "hover" | "interactive";

interface CursorContextType {
  cursorState: CursorState;
  setCursorState: (state: CursorState) => void;
}

const CursorContext = createContext<CursorContextType>({
  cursorState: "default",
  setCursorState: () => {},
});

export const useCursor = () => useContext(CursorContext);

export function CursorProvider({ children }: { children: React.ReactNode }) {
  const [cursorState, setCursorState] = useState<CursorState>("default");
  
  return (
    <CursorContext.Provider value={{ cursorState, setCursorState }}>
      {children}
    </CursorContext.Provider>
  );
}
