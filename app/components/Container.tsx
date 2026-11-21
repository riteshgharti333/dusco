import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-[1280px] px-2 sm:px-6 md:px-8 lg:px-10 ${className}`}
    >
      {children}
    </div>
  );
}
