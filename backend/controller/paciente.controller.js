/**
 * Se coloca el controlador como un objeto y luego se exporta como
 * se requiere primero el modelo paciente
 */

const Paciente = require('../models/paciente');
const pacienteCtrl = {};

/**
 * DEFINO LOS M�TODOS  */

//Obtener todos los pacientes
pacienteCtrl.getPacientes = async (req, res) => {
    const pacientes = await Paciente.find();
    res.json(pacientes);   
}                    

// Crear paciente

pacienteCtrl.createPacientes = async (req, res) => { 
   const paciente = new Paciente(req.body);
   await paciente.save();    
   res.json({
       'status': 'Paciente guardado'
   });
}

//Conseguir un �nico paciente
pacienteCtrl.getUnicoPaciente = async (req, res) => {     
    const pacienteUnico = await Paciente.findById(req.params.id); 
    res.json(pacienteUnico);
}

//Actualizar paciente
pacienteCtrl.editarPaciente = async (req, res) =>  {
    const { id } = req.params; 
    const pacienteEdit = {  
        name: req.body.name,
        document: req.body.document,
        age: req.body.age,
        phone: req.body.phone,
        birth:req.body.birth,
        adress:req.body.adress,
        email:req.body.email,
        eps:req.body.eps
    };
    await Paciente.findByIdAndUpdate(id, {$set: pacienteEdit}, {new:  true}); 
    res.json({status: 'Paciente Actualizado'});
}

// Eliminar paciente 
pacienteCtrl.eliminarPaciente = async (req, res) => {
    await Paciente.findByIdAndDelete(req.params.id);
    res.json({status: 'Paciente Eliminado'});
}
 
//exporto el m�dulo
module.exports = pacienteCtrl;
