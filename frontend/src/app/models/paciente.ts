export class Paciente {

    constructor(_id = "", name = "", document = "", age = "", phone = "", birth = "", adress = "", email = "", eps = "") {

    this._id = _id;
    this.name = name;
    this.document = document;
    this.age = age;
    this.phone = phone;
    this.birth = birth;
    this.adress = adress;
    this.email = email;
    this.eps = eps;
    
    }
    
    _id: string; // Sub guión id porque los datos van a venir de MOngodb
    name: string;
    document: string;
    age: string;
    phone: string;
    birth: string;
    adress: string;
    email:string;
    eps:string;
    
    }