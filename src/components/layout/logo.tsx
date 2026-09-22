import Link from "next/link";
import Image from "next/image";

export function Logo({ footer = false }: { footer?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="PanTech Software home"
      className={`logo ${footer ? "logo--footer" : ""}`}
    >
      <Image
        src="/images/brand/pantech-logo.webp"
        alt="PanTech Software"
        width={960}
        height={358}
        className="logo-image"
        sizes="(max-width: 360px) 96px, (max-width: 760px) 112px, 150px"
        priority={!footer}
      />
    </Link>
  );
}
