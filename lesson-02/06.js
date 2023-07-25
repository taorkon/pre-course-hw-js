let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

passportWithAddress.address.city = 'Bobryisk';
console.log(passportWithAddress.address.city);
