import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function Badge({ children }: Props) {
  return (
    <span className="text-xs px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-500 dark:text-indigo-400">
      {children}
    </span>
  );
}
