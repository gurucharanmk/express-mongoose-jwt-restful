import { CREATED, ACCEPTED } from 'http-status';
import Todo from './model';
import { successResponse, filterDatabaseResult } from '../../services/response';

export const readOne = (req, res, next) => {
  Todo.findById(req.params.id)
    .then(result => filterDatabaseResult(result))
    .then(successResponse(req, res))
    .catch(err => next(err));
};

export const readAll = (req, res, next) => {
  Todo.find({})
    .then(result => (result.length !== 0 ? filterDatabaseResult(result) : []))
    .then(successResponse(req, res))
    .catch(err => next(err));
};

export const createOne = (req, res, next) => {
  const newTodo = req.body;
  Todo.create(newTodo)
    .then(createdTodo => filterDatabaseResult(createdTodo))
    .then(successResponse(req, res, CREATED))
    .catch(err => next(err));
};

export const updateOne = (req, res, next) => {
  const update = req.body;
  Todo.findByIdAndUpdate(req.params.id, update, { new: true })
    .then(updatedTodo => filterDatabaseResult(updatedTodo))
    .then(successResponse(req, res, ACCEPTED))
    .catch(err => next(err));
};

export const deleteOne = (req, res, next) => {
  Todo.findByIdAndRemove(req.params.id)
    .then(deletedTodo => filterDatabaseResult(deletedTodo))
    .then(successResponse(req, res, ACCEPTED))
    .catch(err => next(err));
};
