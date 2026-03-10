import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function Card({ children }: Props) {
  return (
    <div className="border rounded-xl p-6 bg-white dark:bg-neutral-900">
      {children}
    </div>
  );
}
