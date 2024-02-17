const app = angular.module("myApp", []);
app.controller("MainController", function ($scope,$window) {
    $scope.appName = "Easy Hyderabad";
    $scope.email = "srujanmelam@gmail.com";
  // Your buses data
  $scope.buses = {
    1: {
      busName: "10H",
      id: 1,
      stops: ["Kondapur Bus Depot", "Kondapur", 
            "Kothaguda Bus Stop", "Minerva Bus Stop", 
            "Hitex Kaman", "Shilparam", 
            "Shilparamam Cyber Towers", "Hitech City",
            "Madhapur Image Gradens", "Madhapur Bus Stop",
            "Madhapur", "Madhapur Police Station Bus Stop",
            "Live Life Hospital","Rainbow Park",
            "Peddamma Gudi Bus Stop","Usha Kiran Movies",
            "Jubilee Hills Bus Stop","Jubilee Check Post",
            "Jubilee Hills Check Post Bus Stop","Venkatagiri",
            "Indira Nagar X Road","Sri Krishna Nagar Bus Stop",
            "Yousufguda Checkpost","Yousufguda","State Home",
            "Maithrivanam","Kitchenkraft Bus Stop",
            "Ameerpet","Sheeshmahal Bus Stop",
            "Lalbungalow Bus Stop","Green Park Hotel",
            "Begumpet Railway Station North Bus Stop","Begumpet Bus Stop",
            "Shamlal North Bus Stop","Shoppers Stop South Bus Stop","	Prakash Nagar Bus Stop",
            "Begumpet","Begumpet Police Lines","Anand Theater Bus Stop","Paradise North Bus Stop","SD Road",
            "Swapnalok Complex","Patny Center","Clock Tower","Gurudwara(Secunderabad Bus Station)","Secunderabad Bus Station 2"
        ],
    },
    2: {
      busName: "222A",
      id: 2,
      stops: ["Station F", "Station G", "Station H", "Station I", "Station J"],
    },
  };

  $scope.checkBuses = () => {
    // Implement your logic for checking buses
    console.log("Entered Buses Page");
    $window.location.href = "buses.html";
  };
  $scope.findRoutes = ()=>{
    $window.location.href = "findRoutes.html";
  }
  $scope.findBuses = ()=>{
    $window.location.href = "findBuses.html";
  }
  $scope.checkMetro = () => {
    // Implement your logic for checking metro
    console.log("Entered Metro Page");
    $window.location.href = "metro.html";
  };

  $scope.placesToVisit = () => {
    // Implement your logic for places to visit
    console.log("Entered Places Page");
    $window.location.href = "places.html";
  };


  $scope.showBuses = function () {
    $scope.availableBuses = [];

    for (var busId in $scope.buses) {
        var bus = $scope.buses[busId];
        if (bus.stops.includes($scope.from) && bus.stops.includes($scope.to)) {
            $scope.availableBuses.push(bus);
        }
    }
};
});
