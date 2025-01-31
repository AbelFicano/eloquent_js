function efficientRobot({place, parcels}, route) {
  if (route.length == 0) {
    let parcel = parcels[parcels.findIndex(p => parcels.reduce((value, q) => value && findRoute(roadGraph, place, p.place).length <= findRoute(roadGraph, place, q.place).length))];
    if (parcel.place != place) {
      route = findRoute(roadGraph, place, parcel.place);
    } else {
      route = findRoute(roadGraph, place, parcel.address);
    }
  }
  return {direction: route[0], memory: route.slice(1)};
}
