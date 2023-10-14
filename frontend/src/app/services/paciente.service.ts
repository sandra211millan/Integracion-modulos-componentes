import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Paciente } from '../models/paciente';

@Injectable({
providedIn: 'root'
})

export class PacienteService {
    selectedPaciente: Paciente;
    pacientes : Paciente[];
    readonly URL_API = 'http://localhost:3000/api/pacientes';

    constructor(private http: HttpClient) {
    this.selectedPaciente = new Paciente();
    this.pacientes = [];
    }

    getPacientes(){
    return this.http.get(this.URL_API);
    }

    PostPaciente(Paciente:Paciente){
    return this.http.post(this.URL_API, Paciente);
    }

    putPaciente(Paciente:Paciente){
    return this.http.put(this.URL_API + `/${Paciente._id}`, Paciente);//
    }

    deletePaciente(_id: string) { // Solo se necesita el id, no todo lo del paciente
    return this.http.delete(this.URL_API + `/${_id}`);// utilizamos el método delete
    }

}
