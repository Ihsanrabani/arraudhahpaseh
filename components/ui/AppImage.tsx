"use client";

import Image from "next/image";
import { useState } from "react";
import { images, type ImageSlot } from "@/content/images";
import { cn } from "@/lib/utils";

interface AppImageProps {
  slot: keyof typeof images;
  className?: string;
  fill?: boolean;
  style?: React.CSSProperties;
  objectFit?: "cover" | "contain" | "fill";
  rounded?: boolean;
}

export default function AppImage({
  slot,
  className,
  fill = false,
  style,
  objectFit = "cover",
  rounded = false,
}: AppImageProps) {
  const imgData: ImageSlot = images[slot];
  const [hasError, setHasError] = useState(false);

  const fileExists =
    !hasError &&
    imgData.src &&
    imgData.src !== "" &&
    !imgData.src.startsWith("[ISI:");

  if (!fileExists || hasError) {
    // Placeholder dengan rasio asli
    const aspectRatio = imgData.width / imgData.height;
    return (
      <div
        className={cn(
          "flex items-center justify-center overflow-hidden bg-[#0D5C3A]/10 border border-[#0D5C3A]/20",
          rounded && "rounded-xl",
          fill ? "absolute inset-0 w-full h-full" : "",
          className,
        )}
        style={!fill ? { aspectRatio: String(aspectRatio), ...style } : style}
        role="img"
        aria-label={imgData.alt}
      >
        <div className="text-center p-4 text-[#0D5C3A]/60 select-none">
          <svg
            className="w-10 h-10 mx-auto mb-2 opacity-40"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
          <p className="text-xs font-medium leading-tight">{String(slot)}</p>
        </div>
      </div>
    );
  }

  if (fill) {
    return (
      <Image
        src={imgData.src}
        alt={imgData.alt}
        fill
        sizes={imgData.sizes ?? "100vw"}
        className={cn(
          "object-cover",
          objectFit === "contain" && "object-contain",
          objectFit === "fill" && "object-fill",
          rounded && "rounded-xl",
          className,
        )}
        style={style}
        loading={imgData.preload ? "eager" : "lazy"}
        onError={() => setHasError(true)}
      />
    );
  }

  return (
    <Image
      src={imgData.src}
      alt={imgData.alt}
      width={imgData.width}
      height={imgData.height}
      sizes={imgData.sizes}
      className={cn(
        "max-w-full h-auto",
        objectFit === "cover" && "object-cover",
        rounded && "rounded-xl",
        className,
      )}
      style={style}
      loading={imgData.preload ? "eager" : "lazy"}
      onError={() => setHasError(true)}
    />
  );
}
