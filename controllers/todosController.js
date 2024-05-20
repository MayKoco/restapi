
let todos = [];

const getAllTodos = (req, res) => {
  res.json(todos);
};

const getTodoById = (req, res) => {
  const todoId = parseInt(req.params.id);
  const todo = todos.find(todo => todo.id === todoId);
  if (todo) {
    res.json(todo);
  } else {
    res.status(404).json({ message: 'ToDo not found' });
  }
};

const findMaxId = (todos) => {
  if (todos.length === 0) return 0;
  return Math.max(...todos.map(todo => todo.id));
};

const createTodo = (req, res) => {
  const newTodo = req.body;
  const maxId = findMaxId(todos);
  newTodo.id = maxId + 1;
  todos.push(newTodo);
  res.status(201).json(newTodo);
};

const updateTodo = (req, res) => {
  const todoId = parseInt(req.params.id);
  const todoIndex = todos.findIndex(todo => todo.id === todoId);
  if (todoIndex !== -1) {
    todos[todoIndex] = { ...todos[todoIndex], ...req.body };
    res.json(todos[todoIndex]);
  } else {
    res.status(404).json({ message: 'ToDo not found' });
  }
};

const deleteTodo = (req, res) => {
  const todoId = parseInt(req.params.id);
  todos = todos.filter(todo => todo.id !== todoId);
  res.json({ message: 'ToDo deleted' });
};

module.exports = {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo
};
