import Link from "next/link";

export function Logo({ footer = false }: { footer?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="PanTech Software home"
      className={`logo ${footer ? "logo--footer" : ""}`}
    >
      <svg
        viewBox="0 0 32 38"
        width="32"
        height="38"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M5 33V20h12a8 8 0 1 0-8-8v4"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 27h12"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </svg>
      <span>
        PanTech<span className="logo-subtitle">Software</span>
      </span>
    </Link>
  );
}
