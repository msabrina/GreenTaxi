function getOriginLatLong (req, res, next) {
  const originAddress = EncodeURIComponent(req.query.originAddress);
  let key = "AIzaSyBlF8TNXj_FdB5xrIZBHB9uMk1UGegewrk";
  fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${originAddress}&key=${key}`)
  .then(r => r.json())
    .then((originData) => {
      res.originLat = originData.results.location.lat;
      res.originLong = originData.results.location.lng;
      next()
    })
    .catch((originError) => {
      console.log("Origin Error is ", error);
      next();
    })
  .then(getDestinationLatLong())
}

function getDestinationLatLong(req, res, next) {
  const destinationAddress = EncodeURIComponent(req.query.destinationAddress);
  fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${destinationAddress}&key=${key}`)
    .then(r => r.json())
    .then((desinationData) => {
      res.destinationLat = destinationData.results.location.lat;
      res.destinationLong = destinationData.results.location.lng;
      next();
    })
    .catch((destinationError) => {
      console.log("Destination Error is ", destinationError);
      next();
    })
    .then(getDistance())
}

function getDistance(req, res, next){
  fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${originLat},${originLong}&destinations=${destinationLat},${destinationLong}&key=${key}`)
    .then(r => r.json())
    .then((distanceData) => {
      res.tripDistance = distanceData.rows.elements.distance.text;
      next();
    })
    .catch((distanceError) => {
      console.log("Distance Error is ", distanceError);
      next();
    })
}

function prepareResponse(req, res, next) {
  res.data = [
    res.originLat,
    res.originLong,
    res.destinationLat,
    res.destinationLong,
    res.tripDistance
  ]
}
