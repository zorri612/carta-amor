"use client";

import dynamic from "next/dynamic";

const Carta = dynamic(() => import("@/components/Carta"), {
  ssr: false,
});

export default function CartaClient() {
  return <Carta />;
}