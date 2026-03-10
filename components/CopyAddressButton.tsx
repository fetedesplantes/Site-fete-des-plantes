"use client";

import { Copy } from "lucide-react";
import { useState } from "react";

export default function CopyAddressButton({
  address,
  className = "",
}: {
  address: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      // fallback simple
      try {
        await navigator.clipboard.writeText(address);
      } catch {}
    }
  };

  return (
    <button
      type="button"
      onClick={onCopy}
      className={[
        "inline-flex items-center gap-2 rounded-xl bg-sand px-4 py-2 text-sm font-medium text-forest ring-1 ring-stone/30 transition hover:bg-paper",
        className,
      ].join(" ")}
    >
      <Copy size={16} />
      {copied ? "Copié ✅" : "Copier l’adresse"}
    </button>
  );
}