import { Router } from 'express';
import {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
} from './taskController';

const router = Router();

router.get('/ping', (req, res) => {
  res.json({ message: 'pong - Vanderson Paulo' });
});
router.get('/movies', (req, res) => {

  res.json([
    {
      id: 1,
      nome: 'Interestelar',
      genero: 'Ficção científica',
      anoLancamento: 2014,
      diretor: 'Christopher Nolan',
      duracao: '2h 49min',
      avaliacao: 8.7
    },
    {
      id: 2,
      nome: 'O Poderoso Chefão',
      genero: 'Drama',
      anoLancamento: 1972,
      diretor: 'Francis Ford Coppola',
      duracao: '2h 55min',
      avaliacao: 9.2
    },
    {
      id: 3,
      nome: 'Batman: O Cavaleiro das Trevas',
      genero: 'Ação',
      anoLancamento: 2008,
      diretor: 'Christopher Nolan',
      duracao: '2h 32min',
      avaliacao: 9.0
    },
    {
      id: 4,
      nome: 'O Senhor dos Anéis: O Retorno do Rei',
      genero: 'Fantasia',
      anoLancamento: 2003,
      diretor: 'Peter Jackson',
      duracao: '3h 21min',
      avaliacao: 9.0
    },
    {
      id: 5,
      nome: 'Matrix',
      genero: 'Ficção científica',
      anoLancamento: 1999,
      diretor: 'Lana Wachowski e Lilly Wachowski',
      duracao: '2h 16min',
      avaliacao: 8.7
    }
  ]);
});
router.get('/tasks', getTasks);
router.get('/tasks/:id', getTaskById);
router.post('/tasks', createTask);
router.put('/tasks/:id', updateTask);
router.delete('/tasks/:id', deleteTask);

export default router;
