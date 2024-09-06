const express = require('express');
const { json } = require('stream/consumers');

const app = express();

//endpoint
app.get('/', (req, res)=>{
    res.send("<h1><button>Click to continue!</button></h1>");
});

//home route
app.get('/home', (req, res)=>{
    res.send("<h2>Welcome to your home page!</h2>")
});
/*
//Using post
app.post('/postRequest', (req, res)=>{
    res.send("Post method was successifully done!")
});
*/
const cars = [
    { id: 1, make: 'Toyota', model: 'Camry', year: 2020 },
    { id: 2, make: 'Honda', model: 'Civic', year: 2019 },
    { id: 3, make: 'Ford', model: 'Mustang', year: 2021 },
    { id: 4, make: 'Chevrolet', model: 'Malibu', year: 2018 },
    { id: 5, make: 'Tesla', model: 'Model S', year: 2022 },
    { id: 6, make: 'Nissan', model: 'Altima', year: 2020 },
    { id: 7, make: 'BMW', model: '3 Series', year: 1960 },
    { id: 8, make: 'Audi', model: 'A4', year: 2020 },
    { id: 9, make: 'Mercedes-Benz', model: 'C-Class', year: 2019 },
    { id: 10, make: 'Lexus', model: 'RX', year: 2021 }
];

/*
//All cars names only
app.post('/cars/names', (req, res)=>{
    let allCars = cars.map(function (car) {
        return car.make;
    });
    res.json(allCars);
});
*/

//All cars with their description
app.get('/cars', (req, res)=>{

    res.json(cars)
});

//A specific car according to the index passed
app.get('/cars/:carId', (req, res)=>{
    let requestedId = req.params.carId;
    let requestedCar = cars.find(car=>
        car.id === parseInt(requestedId)
    )
    if (requestedCar) {
        res.json(requestedCar)
    }else
    res.send("Car not found")
    
});



app.listen(250, ()=>{console.log("Server started on port: 250")})