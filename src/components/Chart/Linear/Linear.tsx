import { useCallback, useEffect, useMemo, useRef } from "react";
import { twa } from "../../../utils/twa";

type Props = {
  xAxis?: string;
  yAxis?: string;
  datas: number[];
  showPoints?: boolean;
};

type Point = {
  data: number;
  index: number;
};

export const Linear = ({
  xAxis,
  yAxis,
  datas: dataProps,
  showPoints,
}: Props) => {
  const ref = useRef<HTMLCanvasElement>(null);

  // Take last 50 elements
  const datas = dataProps.slice(-50);

  const padding = 50;

  const pixelRatio = useMemo(() => {
    return window.devicePixelRatio ?? 1;
  }, []);

  const range = useMemo<{ max: number; min: number }>(() => {
    const max = Math.max(...datas);
    const min = Math.min(...datas);
    return { max, min };
  }, [datas]);

  const getCanvas = useCallback(() => {
    const canvas = ref.current;
    return canvas;
  }, []);

  useEffect(() => {
    const canvas = getCanvas()!;
    var rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * pixelRatio;
    canvas.height = rect.height * pixelRatio;

    const ctx = getContext()!;
    ctx.translate(padding, canvas.height - padding);
    ctx.scale(1, -1);
  }, []);

  useEffect(() => {
    drawGrid();
  }, [range]);

  useEffect(() => {
    // Clear canvas
    const ctx = getContext()!;
    ctx.clearRect(-3, -3, ctx.canvas.width, ctx.canvas.height);
    drawGrid();
    startDrawing();
  }, [datas]);

  const getContext = useCallback<() => CanvasRenderingContext2D | null>(() => {
    const canvas = getCanvas();
    if (!canvas) return null;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;
    return ctx;
  }, []);

  function drawGrid() {
    const canvas = getCanvas()!;

    const ctx = getContext()!;

    let spacing = (canvas.width - padding) / datas.length;

    // Draw Vertical grid lines
    for (let i = 0; i < datas.length; i++) {
      const x = spacing * i;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.lineWidth = 1 / (pixelRatio * 1.5);
      ctx.strokeStyle = "lightgray";
      ctx.stroke();
    }

    // Draw Horizontal grid lines

    for (let i = 0; i < canvas.height; i += spacing) {
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(canvas.width, i);
      ctx.lineWidth = 1 / (pixelRatio * 1.5);
      ctx.strokeStyle = "lightgray";
      ctx.stroke();
    }
  }

  function startDrawing() {
    datas.forEach((data, index, self) => {
      printPointTo(resolveXPositionBasedOnIndex(index), resolveYPosition(data));
      if (index) {
        tracePointToPoint(
          {
            data: self[index - 1],
            index: index - 1,
          },
          { data, index }
        );
      }
    });
  }

  function tracePointToPoint(p1: Point, p2: Point) {
    const ctx = getContext()!;
    ctx.beginPath();
    ctx.moveTo(
      resolveXPositionBasedOnIndex(p1.index),
      resolveYPosition(p1.data)
    );
    ctx.lineTo(
      resolveXPositionBasedOnIndex(p2.index),
      resolveYPosition(p2.data)
    );
    ctx.lineWidth = 1 / (pixelRatio * 1.5);
    ctx.strokeStyle = "black";
    ctx.stroke();
  }

  function resolveXPositionBasedOnIndex(index: number) {
    const canvas = getCanvas()!;
    return ((canvas.width - padding) / datas.length) * index;
  }

  function resolveYPosition(data: number) {
    const canvas = getCanvas()!;
    const y =
      canvas.height -
      ((data - range.min) / (range.max - range.min)) *
        (canvas.height - padding * 2);
    return canvas.height - y;
  }

  function printPointTo(x: number, y: number) {
    const ctx = getContext()!;
    ctx.beginPath();
    ctx.arc(x, y, 3, 0, 2 * Math.PI, true);
    ctx.fillStyle = "red";
    ctx.fill();
  }

  return (
    <canvas
      ref={ref}
      width={"150"}
      height={"100"}
      className={twa`border border-main-500`}
    />
  );
};
