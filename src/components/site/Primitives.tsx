import { cn } from "@/lib/utils";
import type { Asset } from "@/data/assets";
import { useReveal } from "@/hooks/use-reveal";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article";
};

export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const Tag = as as React.ElementType;
  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", visible && "reveal-in", className)}
    >
      {children}
    </Tag>
  );
}

type FigureProps = {
  asset: Asset;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
  caption?: string;
};

/** Imagem responsiva com ponto focal e proporção controlada pelo container. */
export function AssetImage({
  asset,
  className,
  imgClassName,
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
}: FigureProps) {
  return (
    <div className={cn("relative overflow-hidden bg-secondary", className)}>
      <img
        src={asset.src}
        alt={asset.alt}
        width={asset.width}
        height={asset.height}
        sizes={sizes}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        className={cn("h-full w-full object-cover", imgClassName)}
        style={{ objectPosition: asset.desktopPosition }}
      />
    </div>
  );
}
