import '@do-while-for-each/test';
import {distanceOnSphereInKm} from '../../distance-on-sphere-in-km';
import {distanceOnPlane} from '../../distance-on-plane';
import {RadarProjection} from '../../radar-projection';

describe('check', () => {

  test('radar projection', () => {
    const radarPos = [23.67, 70.67]; // радар ENHF - HAMMERFEST Норвегия (высота 81 метр)
    // const radarPos = [30.23, 59.81]; // радар ULLI - Санкт-Петербург (высота 4 метра)
    // const radarPos = [-80.41, 25.61]; // радар KAMX - MIAMI/88D (высота 4 метра)
    // const radarPos = [-76.98, -0.45]; // радар SECO - Эквадор (высота 220 метров)
    const step = 4; // km

    const proj = new RadarProjection(radarPos, step);

    const xyPoint = [33, 33];
    const geoPoint = proj.xyToGeo(xyPoint);
    const xyPointCheck = proj.geoToXy(geoPoint);
    const geoPointCheck = proj.xyToGeo(xyPointCheck);

    console.log(`\nРадар центр: [${radarPos}]\n`);

    console.log(`Точка с плоскости радара [${xyPoint}] -> отправляется на фронтенд в виде гео-точки [${geoPoint}]`,)
    console.log(`Пользователь кликнул в гео-точку [${geoPoint}] -> бекенд преобразует ее в точку на плоскости данных радара [${xyPointCheck}]`,);
    console.log('---');
    console.log(`Погрешность ${distanceOnPlane(xyPoint[0], xyPoint[1], xyPointCheck[0], xyPointCheck[1])} \n\n`);

    console.log(`Данные точки с плоскости радара [${xyPointCheck}] -> отправляются на фронтенд для гео-точки [${geoPointCheck}]`);
    console.log('---');
    console.log(`Погрешность ${distanceOnSphereInKm(geoPoint[0], geoPoint[1], geoPointCheck[0], geoPointCheck[1])} км.`);
  });


  // test('bearing-on-plane', () => {
  //
  //   console.log(bearingNEOnPlane(0, 0));
  //   console.log(bearingNEOnPlane(0, -1));
  //   console.log(bearingNEOnPlane(1, -1));
  //   console.log(bearingNEOnPlane(1, 0));
  //   console.log(bearingNEOnPlane(1, 1));
  //   console.log(bearingNEOnPlane(0, 1));
  //   console.log(bearingNEOnPlane(-1, 1));
  //   console.log(bearingNEOnPlane(-1, 0));
  //   console.log(bearingNEOnPlane(-1, -1));
  //
  // });
  //
  // test('distance-on-plane', () => {
  //
  //   console.log(distanceOnPlane(0, 0, 33, 33))
  //   console.log(distanceOnPlane(0, 0, 33 * 4, 33 * 4))
  //
  // });

});
