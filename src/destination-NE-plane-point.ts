import {Angle} from '@do-while-for-each/math';

/**
 * Координаты конечной точки на плоскости безразмерного пространства.
 *
 * @param bearingDeg - пеленг конечной точки, когда наблюдатель стоит в начальной точке и угол отсчитывается по кругу North-East (Север-Восток).
 * @param dist - расстояние от наблюдателя(начальная точка) до конечной точки
 */
export function destinationNEPlanePoint(bearingDeg: number, dist: number) {

  let angle = Angle.rad(bearingDeg);
  let xMult= 1; // угол всегда будет острый, поэтому значения sin cos будут положительными
  let yMult= 1; // поэтому для каждой четверти нужен мультипликатор, чтобы значение перенести в нужную четверть

  if (bearingDeg > 0 && bearingDeg < 90) {
    yMult = -1;
  } else if (bearingDeg > 90 && bearingDeg < 180) {
    angle = Angle.rad(180 - bearingDeg);
  } else if (bearingDeg > 180 && bearingDeg < 270) {
    angle = Angle.rad(270 - bearingDeg);
    xMult = -1;
  } else if (bearingDeg > 270 && bearingDeg < 360) {
    angle = Angle.rad(360 - bearingDeg);
    xMult = -1;
    yMult = -1;
  }

  return [
    Math.sin(angle) * dist * xMult,
    Math.cos(angle) * dist * yMult,
  ];
}
