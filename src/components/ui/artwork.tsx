import Image from "next/image";
import type { Artwork as ArtworkData } from "@/data/projects";

// Only artwork is displayed from the reference. All page text and controls are native HTML.
// Supplying src switches directly to a standalone project asset without changing layouts.
export function Artwork({
  crop,
  src,
  alt,
  className = "",
  priority = false,
}: ArtworkData & { className?: string; priority?: boolean }) {
  const [x, y, width, height] = crop;
  return (
    <div className={`artwork ${className}`}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 640px) 100vw, 65vw"
          className="standalone-artwork"
          priority={priority}
        />
      ) : (
        <Image
          src="/images/design-reference.png"
          alt={alt}
          width={758}
          height={2076}
          unoptimized
          priority={priority}
          draggable={false}
          style={{
            position: "absolute",
            maxWidth: "none",
            width: `${(748 / width) * 100}%`,
            height: `${(2048 / height) * 100}%`,
            left: `${(-x / width) * 100}%`,
            top: `${(-y / height) * 100}%`,
          }}
        />
      )}
    </div>
  );
}
