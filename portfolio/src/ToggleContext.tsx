import React, { createContext, useContext, useState } from 'react';

interface ToggleContextType {
  reduceMotion: boolean;
  setReduceMotion: (v: boolean) => void;
  debugBorders: boolean;
  setDebugBorders: (v: boolean) => void;
}

const ToggleContext = createContext<ToggleContextType | undefined>(undefined);

export const ToggleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [reduceMotion, setReduceMotion] = useState(false);
  const [debugBorders, setDebugBorders] = useState(false);

  return (
    <ToggleContext.Provider value={{ reduceMotion, setReduceMotion, debugBorders, setDebugBorders }}>
      {children}
    </ToggleContext.Provider>
  );
};

export function useToggles() {
  const ctx = useContext(ToggleContext);
  if (!ctx) throw new Error('useToggles must be used within a ToggleProvider');
  return ctx;
} 