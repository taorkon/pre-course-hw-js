let passport = {
    name: "Petr",
    surname: "Petrov",
};

let copyPass = {
    ...passport
};

copyPass.name = "Ivan";

console.log(passport.name);
console.log(copyPass.name);