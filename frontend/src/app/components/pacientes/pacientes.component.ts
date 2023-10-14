import { Component, OnInit } from '@angular/core';
import { PacienteService} from "../../services/paciente.service";
import { NgForm } from '@angular/forms';
import { Paciente } from 'src/app/models/paciente';

declare var M: any;

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css'],
  providers: [PacienteService]
})

export class PacientesComponent implements OnInit {

constructor(public pacienteService: PacienteService) { }

ngOnInit(): void {

}
agregarPaciente(form?: NgForm) {
this.pacienteService.PostPaciente(form?.value)
.subscribe(res => {
this.resetForm(form);
M.toast({html: 'Guardado satisfactoriamente'});
});
}
resetForm(form?: NgForm) { // Limpiar el formulario, recibe un formulario como parametro

if (form) {
form.reset();
this.pacienteService.selectedPaciente = new Paciente();
}
}
}

