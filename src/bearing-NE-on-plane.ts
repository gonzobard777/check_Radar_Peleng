import {Angle} from '@do-while-for-each/math';

/**
 * Пеленг, азимут или направление. Для плоскости.
 * Угол отсчитывается по кругу North-East (Север-Восток): Север = 0°, Восток = 90° и т.д.
 * Это угол между двумя прямыми: Наблюдатель-Север и Наблюдатель-ЦелевойОбъект.
 *
 * @param targetX - координата целевого объекта по оси X
 * @param targetY - координата целевого объекта по оси Y
 * @param obsX - координата наблюдателя по оси X
 * @param obsY - координата наблюдателя по оси Y
 */
export function bearingNEOnPlane(targetX: number, targetY: number, obsX = 0, obsY = 0): number {

  if (targetX === 0 && targetY === 0)
    return 0;

  const angle = Angle.deg(Math.atan2(obsX - targetX, targetY - obsY)) + 180;
  return angle === 360
    ? 0
    : angle;
}
