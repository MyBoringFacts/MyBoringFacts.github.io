"use client";
import React, { useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";

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
}: {
  rows?: number;
  cols?: number;
  cellSize?: number;
  className?: string;
  rotateColors?: boolean;
}) => {
  const [clickedCell, setClickedCell] = useState<{
    row: number;
    col: number;
  } | null>(null);
  const [rippleKey, setRippleKey] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const handleCellClick = (row: number, col: number) => {
    setClickedCell({ row, col });
    setRippleKey((k) => k + 1);
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
      <div className="relative h-auto w-auto overflow-hidden">
        <div className="pointer-events-none absolute inset-0 z-[2] h-full w-full overflow-hidden" />
        <DivGrid
          key={`base-${rippleKey}`}
          className="mask-radial-from-20% mask-radial-at-top opacity-60"
          rows={rows}
          cols={cols}
          cellSize={cellSize}
          borderColor="var(--cell-border-color)"
          fillColor="var(--cell-fill-color)"
          clickedCell={clickedCell}
          onCellClick={handleCellClick}
          interactive
          rotateColors={rotateColors}
          activeColor={colorPalette[colorIndex]}
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
    <div className={cn("relative z-[3]", className)} style={gridStyle}>
      {cells.map((idx) => {
        const rowIdx = Math.floor(idx / cols);
        const colIdx = idx % cols;
        const hoverColorIdx = (rowIdx * 31 + colIdx * 17 + idx * 13) % hoverColorPalette.length;
        const hoverColor = hoverColorPalette[hoverColorIdx];
        const hoverGlowColor = hoverShadowPalette[hoverColorIdx];
        const distance = clickedCell
          ? Math.hypot(clickedCell.row - rowIdx, clickedCell.col - colIdx)
          : 0;
        const delay = clickedCell ? Math.max(0, distance * 55) : 0;
        const duration = 200 + distance * 80;

        const style: CellStyle = clickedCell
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

        return (
          <div
            key={idx}
            className={cn(
              "cell relative border-[0.5px] opacity-40 transition-all duration-200 will-change-transform hover:opacity-95 hover:bg-(--hover-color) hover:[box-shadow:0px_0px_30px_0px_var(--hover-glow-color)_inset,0px_0px_22px_0px_var(--hover-glow-color)] dark:shadow-[0px_0px_40px_1px_var(--cell-shadow-color)_inset]",
              clickedCell && rotateColors && "animate-cell-ripple-color fill-mode-[none]",
              clickedCell && !rotateColors && "animate-cell-ripple fill-mode-[none]",
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
