// app/Contexts/UiProvider.tsx
"use client";

import { HeroUIProvider } from "@heroui/react";

export default function UiProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <HeroUIProvider>{children}</HeroUIProvider>;
}
