class App {
  constructor() {
    // this.clearButton = document.getElementById("clear-btn");
    // this.loadButton = document.getElementById("load-btn");
    this.carContainerElement = document.getElementById("cars-container");
    this.inactiveDB = inactiveDarkBackground();
  }

  async init() {
    await this.load();
    this.run();

    // Register click listener
    // this.clearButton.onclick = this.clear;
    // // this.loadButton.onclick = this.run;
  }

  run = () => {
    Car.list.forEach((car) => {
      const node = document.createElement("div");
      node.className = "col-4";
      node.innerHTML = car.render();
      this.carContainerElement.appendChild(node);
    });
  };

  async load() {
    this.clear();
    let cars = [];
    cars = await Binar.listCars();
    document.getElementById("filter").style.width = "0";
    const passenger = document.getElementById("inputPenumpang");
    const date = document.getElementById("inputTanggal");
    const time = document.getElementById("inputWaktu");
    const passengerSeat = passenger.value;
    const dateSeat = date.value;
    const timeSeat = time.value;
    let inputDateTime = dateSeat + "T" + timeSeat + "Z";
    if (timeSeat == "" || dateSeat == "") {
      alert("Silakan lengkapi form!");
    }
    let filteredCars = cars.filter((car) => {
      if (passengerSeat === "") {
        return (
          car.available === true &&
          Date.parse(car.availableAt) > Date.parse(inputDateTime)
        );
      } else {
        return (
          car.available === true &&
          Date.parse(car.availableAt) > Date.parse(inputDateTime) &&
          car.capacity >= passengerSeat
        );
      }
    });
    Car.init(filteredCars);
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}
