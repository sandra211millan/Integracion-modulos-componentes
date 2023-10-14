const express = require('express');
const router = express.Router();
const pacienteCtrl = require ('../controller/paciente.controller');

router.get('/', pacienteCtrl.getPacientes); 
router.post('/', pacienteCtrl.createPacientes);
router.get ('/:id', pacienteCtrl.getUnicoPaciente);
router.put ('/:id', pacienteCtrl.editarPaciente);
router.delete ('/:id', pacienteCtrl.eliminarPaciente);

module.exports = router;
