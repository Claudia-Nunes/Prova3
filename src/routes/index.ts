import { Router } from 'express';
import FuncionarioController from '../controller/FuncionarioController';
import MensalistaController from '../controller/MensalistaController';
import CargoController from '../controller/CargoController';

const routes = Router();

routes.post('/funcionarios', FuncionarioController.create);
routes.get('/funcionarios', FuncionarioController.list);
routes.delete('/funcionarios', FuncionarioController.delete);
routes.put('/funcionarios', FuncionarioController.update);

routes.post('/mensalistas', MensalistaController.create);
routes.get('/mensalistas', MensalistaController.list);
routes.delete('/mensalistas', MensalistaController.delete);
routes.put('/mensalistas', MensalistaController.update);

routes.post('/cargos', CargoController.create);
routes.get('/cargos', CargoController.list);
routes.delete('/cargos', CargoController.delete);
routes.put('/cargos', CargoController.update);

export default routes;
