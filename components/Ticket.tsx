import clsx from "clsx";

type TicketProps = {
  children: React.ReactNode;
  className?: string;
  bgClassName?: string;
  borderClassName?: string;
  innerClassName?: string;
};

export default function Ticket({
  children,
  className,
  bgClassName = "bg-terracotta/75",
  borderClassName = "bg-terracotta2/35",
  innerClassName = "",
}: TicketProps) {
  const maskStyle: React.CSSProperties = {
    WebkitMaskImage: "url(/images/ticket.svg)",
    WebkitMaskRepeat: "no-repeat",
    WebkitMaskPosition: "center",
    WebkitMaskSize: "100% 100%",
    maskImage: "url(/images/ticket.svg)",
    maskRepeat: "no-repeat",
    maskPosition: "center",
    maskSize: "100% 100%",
  };

  return (
    <div className={clsx("relative w-full", className)}>
      {/* Shadow "ambiante" très douce (rectangle, mais quasi invisible) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[44px] shadow-[0_26px_70px_rgba(0,0,0,0.10)]"
      />

      {/* Border layer (masquée) */}
      <div
        aria-hidden
        className={clsx("absolute inset-0", borderClassName)}
        style={maskStyle}
      />

      {/* Main ticket (masqué) */}
      <div
        className={clsx("relative", bgClassName)}
        style={maskStyle}
      >
        {/* Volume interne (highlight + inner shadow) */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={maskStyle}
        >
          {/* highlight haut */}
          <div className="absolute inset-x-6 top-4 h-16 rounded-[999px] bg-white/12 blur-xl" />
          {/* inner shadow */}
          <div className="absolute inset-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.25),inset_0_-18px_40px_rgba(0,0,0,0.08)]" />
          {/* bord doux */}
          <div className="absolute inset-0 ring-1 ring-black/10" />
        </div>

        {/* Content */}
        <div className={clsx("relative", innerClassName)}>{children}</div>
      </div>
    </div>
  );
}