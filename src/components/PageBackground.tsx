"use client";

import { usePathname } from "next/navigation";

export default function PageBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  if (isHome) {
    return <>{children}</>;
  }

  return (
    <div className="relative min-h-screen bg-cream">
      <div
        className="fixed top-0 left-0 right-0 bottom-0 bg-cover bg-center bg-no-repeat opacity-20 pointer-events-none z-0"
        style={{ backgroundImage: "url(/assets/logo-notext-padding.png)" }}
        aria-hidden
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
