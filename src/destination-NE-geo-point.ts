import {Angle} from '@do-while-for-each/math';
import {EarthRadiusInKm} from './constant';

/**
 * Координаты конечной точки (в географических координатах).
 *
 * @param startLon - долгота начально точки
 * @param startLat - широта начально точки
 * @param distKm - расстояние между начальной и конечной точкой
 * @param bearingDeg - пеленг конечной точки, когда наблюдатель стоит в начальной точке и угол отсчитывается по кругу North-East (Север-Восток).
 */
export function destinationNEGeoPoint(startLon: number, startLat: number, distKm: number, bearingDeg: number) {

  const φ1 = Angle.rad(startLat);
  const λ1 = Angle.rad(startLon);
  const θ = Angle.rad(bearingDeg);

  const δ = distKm / EarthRadiusInKm;

  const φ2 = Math.asin(Math.sin(φ1) * Math.cos(δ) +
    Math.cos(φ1) * Math.sin(δ) * Math.cos(θ));
  const λ2 = λ1 + Math.atan2(Math.sin(θ) * Math.sin(δ) * Math.cos(φ1),
    Math.cos(δ) - Math.sin(φ1) * Math.sin(φ2));

  return [Angle.deg(λ2), Angle.deg(φ2)];
}
