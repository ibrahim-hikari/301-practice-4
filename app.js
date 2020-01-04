`use strict`;

let file = require('./a.json')
let allData = new Info(file)

function Info(data) {
    this.name = data.name
    this.pets = data.pets
    this.children = JSON.stringify(data.children)
    this.job = data.job
}

Info.prototype.list = function () {
    console.log(`app.2 \n\n name: ${this.name},\n pets: ${this.pets},\n children: ${this.children},\n job: ${this.job}\n\n\n`);
    
}

allData.list()

let arr = allData.pets

var result = (char) => {
    return arr.filter(element => element.indexOf(char) > -1);
}

console.log('app.3\n', result('R'), '\n');

function Person(name, age) {
    this.name = name
    this.age = age
    this.dogAge = age*7
    Person.all.push(this)
}
Person.all = []

let zach = new Person(Object.keys(file.children)[0], Object.values(file.children)[0].age)
let allie = new Person(Object.keys(file.children)[1], Object.values(file.children)[1].age)


Person.prototype.dogYear = function () {
    let dogAge = this.age * 7
    console.log(`app.5\n ${dogAge} \n`);
}

zach.dogYear();
allie.dogYear();

console.log(Person.all);