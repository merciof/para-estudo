import { Car } from "./classes/car.js";
import { Drone } from "./classes/drone.js";
import { fleet } from "./fleet-data.js";
import { FleetDataService } from "./services/fleet-data-service.js";




let dataService = new FleetDataService();
dataService.loadData(fleet);


window.console.log(dataService.cars);
window.console.log(dataService.drones);

for (const car of dataService.cars) {
    window.console.log(car.license);
}

for (const drone of dataService.drones) {
    window.console.log(drone.license);
}

for (const error of dataService.errors) {
    window.console.log(error.message);
}