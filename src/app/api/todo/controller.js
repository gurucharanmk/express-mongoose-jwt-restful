import Todo from './model';

// TODO:Cleaning of data before sending to routes
// TODO:Cleaning of data before sending to routes

export const readOne = (req, res, next) => {
  Todo.findById(req.params.id)
    .then(result => res.json(result))
    .catch(err => next(err));
};

export const readAll = (req, res, next) => {
  Todo.find({})
    .then(result => res.json(result))
    .catch(err => next(err));
};

export const createOne = (req, res, next) => {
  const newTodo = req.body;
  Todo.create(newTodo)
    .then(post => res.json(post))
    .catch(err => next(err));
};

export const updateOne = (req, res, next) => {
  const update = req.body;
  Todo.findByIdAndUpdate(req.params.id, update, { upsert: true, new: true })
    .then(savedTodo => res.json(savedTodo))
    .catch(err => next(err));
};

export const deleteOne = (req, res, next) => {
  Todo.findByIdAndRemove(req.params.id)
    .then(deletedTodo => res.json(deletedTodo))
    .catch(err => next(err));
};
