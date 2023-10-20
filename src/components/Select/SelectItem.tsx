"use client";

import * as SelectRadix from "@radix-ui/react-select";
import { Check } from "lucide-react";

interface SelectItemProps extends SelectRadix.SelectItemProps {
  option: string;
}

export function SelectItem({ option, ...props }: SelectItemProps) {
  return (
    <SelectRadix.Item
      className="flex items-center justify-between gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50 dark:data-[highlighted]:bg-zinc-700"
      {...props}
    >
      <SelectRadix.ItemText asChild>
        <span className="text-black dark:text-zinc-100">{option}</span>
      </SelectRadix.ItemText>

      <SelectRadix.ItemIndicator>
        <Check className="h-4 w-4 text-violet-400 dark:text-violet-300" />
      </SelectRadix.ItemIndicator>
    </SelectRadix.Item>
  );
}
