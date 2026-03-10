import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function Container({ children }: Props) {
  return <div className="container mx-auto px-6">{children}</div>;
}
