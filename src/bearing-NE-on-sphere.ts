import {Angle} from '@do-while-for-each/math';

/**
 * Пеленг, азимут или направление. Для сферы.
 * Угол отсчитывается по кругу North-East (Север-Восток): Север = 0°, Восток = 90° и т.д.
 * Это угол между двумя прямыми: Наблюдатель-Север и Наблюдатель-ЦелевойОбъект.
 * https://www.movable-type.co.uk/scripts/latlong.html#bearing
 *
 * @param obsLon - долгота наблюдателя
 * @param obsLat - широта наблюдателя
 * @param targetLon - долгота целевого объекта
 * @param targetLat - широта целевого объекта
 */
export function bearingNEOnSphere(obsLon: number, obsLat: number, targetLon: number, targetLat: number): number {

  const φ1 = Angle.rad(obsLat);
  const φ2 = Angle.rad(targetLat);
  const λ1 = Angle.rad(obsLon);
  const λ2 = Angle.rad(targetLon);

  const y = Math.sin(λ2 - λ1) * Math.cos(φ2);
  const x = Math.cos(φ1) * Math.sin(φ2) -
    Math.sin(φ1) * Math.cos(φ2) * Math.cos(λ2 - λ1);

  const θ = Math.atan2(y, x);

  return (Angle.deg(θ) + 360) % 360;
}
