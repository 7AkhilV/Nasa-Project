const launches = new Map();

let latestFlightNumber = 100;

const launch = {
  flightNumber: 100,
  mission: 'Kepler Exploration X',
  rocket: 'Exploaration IS1',
  launchDate: new Date('December 27, 2030'),
  target: 'kepler -442 b',
  customers: ['ZTM', 'NASA'],
  upcoming: true,
  sucess: true,
};

launches.set(launch.flightNumber, launch);

function existsLaunchWithId(launchId) {
  return launches.has(launchId);
}

function getAllLaunches() {
  return Array.from(launches.values());
}

function abortLaunchById(launchId) {
  const aborted = launches.get(launchId);
  aborted.upcoming = false;
  aborted.sucess = false;
  return aborted;
}

function addNewLaunch(launch) {
  latestFlightNumber++;
  launches.set(
    latestFlightNumber,
    Object.assign(launch, {
      sucess: true,
      upcoming: true,
      customers: ['ZTM', 'NASA'],
      flightNumber: latestFlightNumber,
    })
  );
}

module.exports = {
  existsLaunchWithId,
  getAllLaunches,
  addNewLaunch,
  abortLaunchById
};
