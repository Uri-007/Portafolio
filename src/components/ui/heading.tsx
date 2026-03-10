import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function Heading({ children }: Props) {
  return <h2 className="text-3xl font-bold mb-8">{children}</h2>;
}
