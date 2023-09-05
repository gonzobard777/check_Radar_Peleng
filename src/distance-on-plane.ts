/**
 * Расстояние между двумя точками на плоскости безразмерного пространства.
 */
export const distanceOnPlane = (x: number, y: number, x2: number, y2: number) =>
  Math.sqrt(
    Math.pow(x - x2, 2) + Math.pow(y - y2, 2)
  )
;
