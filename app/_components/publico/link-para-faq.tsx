"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function LinkParaFaq({ className }: { className: string }) {
  const router = useRouter();

  useEffect(() => {
    if (window.location.pathname !== "/") return;
    if (window.sessionStorage.getItem("rolar-para") !== "faq") return;

    window.sessionStorage.removeItem("rolar-para");
    window.requestAnimationFrame(() => rolarAteOFaq());
  }, []);

  return (
    <Link
      href="/#faq"
      className={className}
      onClick={(evento) => {
        evento.preventDefault();

        if (window.location.pathname === "/") {
          window.history.pushState(null, "", "/#faq");
          rolarAteOFaq();
          return;
        }

        window.sessionStorage.setItem("rolar-para", "faq");
        router.push("/");
      }}
    >
      Faq
    </Link>
  );
}

function rolarAteOFaq() {
  document.getElementById("faq")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}
