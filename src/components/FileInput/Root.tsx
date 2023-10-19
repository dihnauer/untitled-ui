"use client";

import {
  ComponentProps,
  createContext,
  useContext,
  useId,
  useState,
} from "react";

type FileInputContextType = {
  id: string;
  files: File[];
  onFilesSelected: (files: File[]) => void;
};

const FileInputContext = createContext({} as FileInputContextType);

export const useFileInput = () => useContext(FileInputContext);

interface RootProps extends ComponentProps<"div"> {}

export function Root(props: RootProps) {
  const id = useId();
  const [files, setFiles] = useState<File[]>([]);

  return (
    <FileInputContext.Provider value={{ id, files, onFilesSelected: setFiles }}>
      <div {...props} />
    </FileInputContext.Provider>
  );
}
