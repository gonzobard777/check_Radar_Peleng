import {Angle} from '@do-while-for-each/math';
import {EarthRadiusInKm} from './constant';

/**
 * Расстояние между двумя точками на поверхности сферы.
 * Конкретно здесь вычисляется ортодрома - это кратчайшее расстояние между двумя точками на поверхности сферы.
 * https://www.movable-type.co.uk/scripts/latlong.html#distance
 */
export function distanceOnSphereInKm(lon1: number, lat1: number, lon2: number, lat2: number) {

  const φ1 = Angle.rad(lat1);
  const φ2 = Angle.rad(lat2);
  const Δφ = Angle.rad(lat2 - lat1);
  const Δλ = Angle.rad(lon2 - lon1);

  const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return EarthRadiusInKm * c;
}
