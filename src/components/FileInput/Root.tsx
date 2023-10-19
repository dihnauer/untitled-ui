"use client";

import { ComponentProps, createContext, useContext, useId } from "react";

type FileInputContextType = {
  id: string;
};

const FileInputContext = createContext({} as FileInputContextType);

export const useFileInput = () => useContext(FileInputContext);

interface RootProps extends ComponentProps<"div"> {}

export function Root(props: RootProps) {
  const id = useId();

  return (
    <FileInputContext.Provider value={{ id }}>
      <div {...props} />;
    </FileInputContext.Provider>
  );
}
