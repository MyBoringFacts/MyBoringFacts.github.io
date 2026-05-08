"use client";
import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";

// useLayoutEffect warns on the server; fall back to useEffect there.
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const colorPalette = [
  "rgba(59, 130, 246, 0.85)",   // blue
  "rgba(139, 92, 246, 0.85)",   // purple
  "rgba(236, 72, 153, 0.85)",   // pink
  "rgba(6, 182, 212, 0.85)",    // cyan
  "rgba(34, 197, 94, 0.85)",    // green
  "rgba(251, 146, 60, 0.85)",   // orange
];

const hoverColorPalette = [
  "rgba(221, 123, 187, 0.88)", // glow pink
  "rgba(215, 159, 30, 0.88)",  // glow amber
  "rgba(90, 146, 44, 0.88)",   // glow green
  "rgba(76, 120, 148, 0.88)",  // glow blue
];

const hoverShadowPalette = [
  "rgba(221, 123, 187, 0.72)",
  "rgba(215, 159, 30, 0.72)",
  "rgba(90, 146, 44, 0.72)",
  "rgba(76, 120, 148, 0.72)",
];

export const BackgroundRippleEffect = ({
  rows = 8,
  cols = 27,
  cellSize = 56,
  className,
  rotateColors = false,
  fillContainer = false,
  edgeToEdge = false,
}: {
  rows?: number;
  cols?: number;
  cellSize?: number;
  className?: string;
  rotateColors?: boolean;
  fillContainer?: boolean;
  edgeToEdge?: boolean;
}) => {
  const [clickedCell, setClickedCell] = useState<{
    row: number;
    col: number;
  } | null>(null);
  const [rippleNonce, setRippleNonce] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  useIsomorphicLayoutEffect(() => {
    if (!fillContainer || !ref.current) return;

    const element = ref.current;

    // Measure synchronously on (re)mount so the grid never paints at the
    // 0x0 default - which would otherwise show the user a clipped grid
    // anchored to the top-left until ResizeObserver fires asynchronously.
    const initialRect = element.getBoundingClientRect();
    const initialWidth = Math.ceil(initialRect.width);
    const initialHeight = Math.ceil(initialRect.height);
    if (initialWidth > 0 || initialHeight > 0) {
      setContainerSize((prev) =>
        prev.width === initialWidth && prev.height === initialHeight
          ? prev
          : { width: initialWidth, height: initialHeight }
      );
    }

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;
      const { width, height } = entry.contentRect;
      const nextWidth = Math.ceil(width);
      const nextHeight = Math.ceil(height);
      setContainerSize((prev) =>
        prev.width === nextWidth && prev.height === nextHeight
          ? prev
          : { width: nextWidth, height: nextHeight }
      );
    });

    observer.observe(element);
    return () => observer.disconnect();
  }, [fillContainer]);

  const computedCols = fillContainer
    ? Math.max(cols, Math.ceil(containerSize.width / cellSize) + 2)
    : cols;
  const computedRows = fillContainer
    ? Math.max(rows, Math.ceil(containerSize.height / cellSize) + 2)
    : rows;

  const handleCellClick = (row: number, col: number) => {
    setClickedCell({ row, col });
    setRippleNonce((n) => n + 1);
    if (rotateColors) {
      setColorIndex((prev) => (prev + 1) % colorPalette.length);
    }
  };

  return (
    <div
      ref={ref}
      className={cn(
        "absolute inset-0 h-full w-full",
        "[--cell-border-color:var(--color-neutral-300)] [--cell-fill-color:var(--color-neutral-100)] [--cell-shadow-color:var(--color-neutral-500)]",
        "dark:[--cell-border-color:var(--color-neutral-700)] dark:[--cell-fill-color:var(--color-neutral-900)] dark:[--cell-shadow-color:var(--color-neutral-800)]",
        className
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden",
          fillContainer
            ? "flex h-full w-full items-center justify-center"
            : "h-auto w-auto"
        )}
      >
        <div className="pointer-events-none absolute inset-0 z-2 h-full w-full overflow-hidden" />
        <DivGrid
          className={cn(
            "opacity-80",
            edgeToEdge ? "mask-none" : "mask-radial-from-20% mask-radial-at-top"
          )}
          rows={computedRows}
          cols={computedCols}
          cellSize={cellSize}
          borderColor="var(--cell-border-color)"
          fillColor="var(--cell-fill-color)"
          clickedCell={clickedCell}
          onCellClick={handleCellClick}
          interactive
          rotateColors={rotateColors}
          activeColor={colorPalette[colorIndex]}
          rippleNonce={rippleNonce}
          maxRippleRadius={8}
        />
      </div>
    </div>
  );
};

type DivGridProps = {
  className?: string;
  rows: number;
  cols: number;
  cellSize: number;
  borderColor: string;
  fillColor: string;
  clickedCell: { row: number; col: number } | null;
  onCellClick?: (row: number, col: number) => void;
  interactive?: boolean;
  rotateColors?: boolean;
  activeColor?: string;
  rippleNonce?: number;
  maxRippleRadius?: number;
};

type CellStyle = React.CSSProperties & {
  ["--delay"]?: string;
  ["--duration"]?: string;
  ["--ripple-color"]?: string;
  ["--hover-color"]?: string;
  ["--hover-glow-color"]?: string;
};

const DivGrid = ({
  className,
  rows = 7,
  cols = 30,
  cellSize = 56,
  borderColor = "#3f3f46",
  fillColor = "rgba(14,165,233,0.3)",
  clickedCell = null,
  onCellClick = () => {},
  interactive = true,
  rotateColors = false,
  activeColor = "rgba(59, 130, 246, 0.5)",
  rippleNonce = 0,
  maxRippleRadius = Number.POSITIVE_INFINITY,
}: DivGridProps) => {
  const cells = useMemo(
    () => Array.from({ length: rows * cols }, (_, idx) => idx),
    [rows, cols]
  );

  const gridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
    gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
    width: cols * cellSize,
    height: rows * cellSize,
    marginInline: "auto",
  };

  return (
    <div className={cn("relative z-3", className)} style={gridStyle}>
      {cells.map((idx) => {
        const rowIdx = Math.floor(idx / cols);
        const colIdx = idx % cols;
        const hoverColorIdx = (rowIdx * 31 + colIdx * 17 + idx * 13) % hoverColorPalette.length;
        const hoverColor = hoverColorPalette[hoverColorIdx];
        const hoverGlowColor = hoverShadowPalette[hoverColorIdx];
        const distance = clickedCell
          ? Math.hypot(clickedCell.row - rowIdx, clickedCell.col - colIdx)
          : 0;
        const inRippleRange = Boolean(clickedCell) && distance <= maxRippleRadius;
        const delay = clickedCell ? Math.max(0, distance * 55) : 0;
        const duration = 200 + distance * 80;

        const style: CellStyle = clickedCell && inRippleRange
          ? {
              "--delay": `${delay}ms`,
              "--duration": `${duration}ms`,
              "--ripple-color": rotateColors ? activeColor : fillColor,
              "--hover-color": hoverColor,
              "--hover-glow-color": hoverGlowColor,
            }
          : {
              "--hover-color": hoverColor,
              "--hover-glow-color": hoverGlowColor,
            };

        const rippleAnimationClass =
          clickedCell && inRippleRange
            ? rotateColors
              ? rippleNonce % 2 === 0
                ? "animate-cell-ripple-color-a fill-mode-[none]"
                : "animate-cell-ripple-color-b fill-mode-[none]"
              : rippleNonce % 2 === 0
              ? "animate-cell-ripple-a fill-mode-[none]"
              : "animate-cell-ripple-b fill-mode-[none]"
            : "";

        return (
          <div
            key={idx}
            className={cn(
              "cell relative border-[0.5px] opacity-60 transition-opacity duration-200 hover:opacity-95 hover:bg-(--hover-color) hover:[box-shadow:0px_0px_22px_0px_var(--hover-glow-color)_inset,0px_0px_16px_0px_var(--hover-glow-color)] dark:shadow-[0px_0px_16px_1px_var(--cell-shadow-color)_inset]",
              rippleAnimationClass,
              clickedCell && inRippleRange && "will-change-transform",
              !interactive && "pointer-events-none"
            )}
            style={{
              backgroundColor: fillColor,
              borderColor: borderColor,
              ...style,
            }}
            onClick={
              interactive ? () => onCellClick?.(rowIdx, colIdx) : undefined
            }
          />
        );
      })}
    </div>
  );
};
