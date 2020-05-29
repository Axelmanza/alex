import * as fs from "fs-extra"
import * as jquery from "jquery"
export class Professional {
    public name: string;
    public age: number;
    public genre: string;
    public weight: number;
    public height: number;
    public hairColor: string;
    public eyeColor: string;
    public race: string;
    public isRetired: boolean;
    public nationality: string;
    public oscarsNum: number;
    public profession: string;

    constructor(name: string, age: number, genre: string = '', weight: number = 0, height: number = 0,
        hairColor: string = '', eyeColor: string = '', race: string = '', isRetired: boolean = false, nationality: string = '',
        oscarsNum: number = 0, profession: string = '') {
        this.name = name
        this.age = age
        this.genre = genre
        this.weight = weight
        this.height = height
        this.hairColor = hairColor
        this.eyeColor = eyeColor
        this.race = race
        this.isRetired = isRetired
        this.nationality = nationality
        this.oscarsNum = oscarsNum
        this.profession = profession
    }
    public print() {
        console.log(`
        Name: ${this.name}
        Age: ${this.age}
        Genre: ${this.genre}
        Weigth: ${this.weight}
        Height: ${this.height}
        Hair Color: ${this.hairColor}
        Eye Color: ${this.hairColor}
        Race: ${this.race}
        Is Retired: ${this.isRetired}
        Nationality: ${this.nationality}
        Oscars: ${this.oscarsNum}
        Profession: ${this.profession}
        `);
    }
}

export class Movie {
    public image: HTMLImageElement;
    public title: string
    public releaseYear: number
    public actors: Professional[]
    public nationality: string
    public director: Professional
    public writer: Professional
    public language: string
    public platform: string
    public isMCU: boolean
    public mainCharacterName: string
    public producer: string
    public distributor: string
    private genre: string
    constructor(title: string, actors: Professional[], releaseYear: number, nationality: string = '', genre: string = '', director: Professional) {
        this.title = title
        this.actors = actors
        this.releaseYear = releaseYear
        this.nationality = nationality
        this.genre = genre
        this.director = director
    }
    public print() {
        let text = `
        Title: ${this.title}
        Year released: ${this.releaseYear}
        Nationality: ${this.nationality}
        Actor: : ${this.actors.forEach(actor => actor.print())}
        Director: ${this.director.print()}
        Writer: ${this.writer.print()}
        Language: ${this.language}
        Platform: ${this.platform}
        Is it MCU: ${this.isMCU}
        Main character name: ${this.mainCharacterName}
        Producer: ${this.producer}
        Distrubuted by: ${this.distributor}
        `
        console.log(text)
    }
}

export class Imdb {
    public peliculas: Movie[];
    constructor(peliculas: Movie[]) {
        this.peliculas = peliculas;
    }
    public toJSON() {
        let json = { 'peliculas': this.peliculas }
        return json;
    }
    public escribirEnFicheroJson(nombre: string) {
        fs.writeJsonSync("./" + nombre + ".json", this.toJSON())
    }
    public static obtenerInstanciaIMSB(nombreFichero: string): Imdb {
        return new Imdb(fs.readJsonSync("./" + nombreFichero + ".json"))
    }
}