"use strict";
exports.__esModule = true;
exports.Imdb = exports.Movie = exports.Professional = void 0;
var fs = require("fs-extra");
var Professional = /** @class */ (function () {
    function Professional(name, age, genre, weight, height, hairColor, eyeColor, race, isRetired, nationality, oscarsNum, profession) {
        this.name = name;
        this.age = age;
        this.genre = genre;
        this.weight = weight;
        this.height = height;
        this.hairColor = hairColor;
        this.eyeColor = eyeColor;
        this.race = race;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNum = oscarsNum;
        this.profession = profession;
    }
    Professional.prototype.print = function () {
        console.log("\n        Name: " + this.name + "\n        Age: " + this.age + "\n        Genre: " + this.genre + "\n        Weigth: " + this.weight + "\n        Height: " + this.height + "\n        Hair Color: " + this.hairColor + "\n        Eye Color: " + this.hairColor + "\n        Race: " + this.race + "\n        Is Retired: " + this.isRetired + "\n        Nationality: " + this.nationality + "\n        Oscars: " + this.oscarsNum + "\n        Profession: " + this.profession + "\n        ");
    };
    return Professional;
}());
exports.Professional = Professional;
var Movie = /** @class */ (function () {
    function Movie(title, actors, releaseYear, nationality, genre, director) {
        this.title = title;
        this.actors = actors;
        this.releaseYear = releaseYear;
        this.nationality = nationality;
        this.genre = genre;
        this.director = director;
    }
    Movie.prototype.print = function () {
        var text = "\n        Title: " + this.title + "\n        Year released: " + this.releaseYear + "\n        Nationality: " + this.nationality + "\n        Actor: : " + this.actors.forEach(function (actor) { return actor.print(); }) + "\n        Director: " + this.director.print() + "\n        Writer: " + this.writer.print() + "\n        Language: " + this.language + "\n        Platform: " + this.platform + "\n        Is it MCU: " + this.isMCU + "\n        Main character name: " + this.mainCharacterName + "\n        Producer: " + this.producer + "\n        Distrubuted by: " + this.distributor + "\n        ";
        console.log(text);
    };
    return Movie;
}());
exports.Movie = Movie;
var Imdb = /** @class */ (function () {
    function Imdb(peliculas) {
        this.peliculas = peliculas;
    }
    Imdb.prototype.toJSON = function () {
        var json = { 'peliculas': this.peliculas };
        return json;
    };
    Imdb.prototype.escribirEnFicheroJson = function (nombre) {
        fs.writeJsonSync("./" + nombre + ".json", this.toJSON());
    };
    Imdb.obtenerInstanciaIMSB = function (nombreFichero) {
        return new Imdb(fs.readJsonSync("./" + nombreFichero + ".json"));
    };
    return Imdb;
}());
exports.Imdb = Imdb;


$();
