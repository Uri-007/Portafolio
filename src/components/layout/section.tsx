import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  id?: string;
}

export function Section({ children, id }: Props) {
  return (
    <section id={id} className="py-24">
      {children}
    </section>
  );
}
