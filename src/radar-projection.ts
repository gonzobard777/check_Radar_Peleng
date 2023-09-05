import {destinationNEPlanePoint} from './destination-NE-plane-point';
import {destinationNEGeoPoint} from './destination-NE-geo-point';
import {distanceOnSphereInKm} from './distance-on-sphere-in-km';
import {bearingNEOnSphere} from './bearing-NE-on-sphere';
import {bearingNEOnPlane} from './bearing-NE-on-plane';
import {distanceOnPlane} from './distance-on-plane';

export class RadarProjection {

  constructor(public center: number[],
              public step: number // в километрах
  ) {
  }

  xyToGeo(xy: number[]): number[] {
    const point = [xy[0] * this.step, xy[1] * this.step]; // привожу к километрам
    const dist = distanceOnPlane(0, 0, point[0], point[1]);
    const bearing = bearingNEOnPlane(point[0], point[1]);
    return destinationNEGeoPoint(this.center[0], this.center[1], dist, bearing);
  }

  geoToXy(geoPoint: number[]): number[] {
    const dist = distanceOnSphereInKm(this.center[0], this.center[1], geoPoint[0], geoPoint[1]);
    const bearing = bearingNEOnSphere(this.center[0], this.center[1], geoPoint[0], geoPoint[1]);
    return destinationNEPlanePoint(bearing, dist / this.step);
  }

}
