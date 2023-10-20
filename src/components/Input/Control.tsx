import { ComponentProps } from "react";

interface ControlProps extends ComponentProps<"input"> {}

export function Control(props: ControlProps) {
  return (
    <input
      className="flex-1 border-0 bg-transparent p-0 text-zinc-900 outline-none placeholder:text-zinc-600 dark:text-zinc-100 dark:placeholder-zinc-400"
      {...props}
    />
  );
}
