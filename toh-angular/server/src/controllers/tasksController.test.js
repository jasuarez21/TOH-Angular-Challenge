/* eslint-disable class-methods-use-this */
const {
  getAll,
  getTaskById,
  deleteTaskById,
  addTask,
  modifyTask
} = require('./tasksController')();
const Task = require('../model/taskModel');

jest.mock('../model/taskModel');

class TaskMock {
  constructor(title) {
    this.title = title;
  }

  save() {}
}

describe('Given a getAll function', () => {
  test('Should respond with status 200', async () => {
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn()
    };
    Task.find.mockResolvedValueOnce(200);

    await getAll(null, res);

    expect(res.status).toHaveBeenCalledWith(200);
  });

  test('Should respond with products json', async () => {
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn()
    };
    Task.find.mockResolvedValueOnce([{}]);

    await getAll(null, res);

    expect(res.json).toHaveBeenCalledWith([{}]);
  });

  test('Should respond with error', async () => {
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn()
    };
    Task.find.mockRejectedValueOnce('error');

    await getAll(null, res);

    expect(res.send).toHaveBeenCalledWith('error');
  });
});

describe('Given a getTaskById function', () => {
  test('Should respond with status 200', async () => {
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn()
    };

    const req = {
      params: {
        productId: 3
      }
    };

    Task.findByIdAndUpdate.mockResolvedValueOnce();
    await getTaskById(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
  });

  test('Should respond with a task', async () => {
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn()
    };

    const req = {
      params: {
        productId: 3
      }
    };

    Task.findById.mockResolvedValueOnce({ fredy: 'si' });
    await getTaskById(req, res);

    expect(res.json).toHaveBeenCalledWith({ fredy: 'si' });
  });

  test('Should respond with error', async () => {
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn()
    };

    const req = {
      params: {
        productId: 3
      }
    };

    Task.findById.mockRejectedValueOnce('error');
    await getTaskById(req, res);

    expect(res.send).toHaveBeenCalledWith('error');
  });
});

describe('Given a deleteTaskById function', () => {
  test('Should respond with status 201', async () => {
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn()
    };

    const req = {
      params: {
        productId: 3
      }
    };

    Task.findByIdAndDelete.mockResolvedValueOnce();

    await deleteTaskById(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
  });

  test('Should respond with error', async () => {
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn()
    };

    const req = {
      params: {
        productId: 3
      }
    };

    Task.findByIdAndDelete.mockRejectedValueOnce('error');

    await deleteTaskById(req, res);

    expect(res.send).toHaveBeenCalledWith('error');
  });
});

describe('Given an modifyTask function', () => {
  test('Should respond with status 201', async () => {
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn()
    };

    const req = {
      params: {
        productId: 3
      }
    };

    Task.findByIdAndUpdate.mockResolvedValueOnce();
    await modifyTask(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
  });
});

describe('Given an addTask function', () => {
  test('Should respond with status 200', async () => {
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn()
    };

    const req = {
      params: {
        productId: 3
      }
    };

    const task = new TaskMock('Task title');
    Task.mockReturnValueOnce(task);
    await addTask(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
  });

  test('Should call res.send', async () => {
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn()
    };

    const req = {
      params: {
        productId: 3
      }
    };

    Task.mockReturnValueOnce({
      save: jest.fn().mockRejectedValueOnce('error')
    });

    await addTask(req, res);

    expect(res.send).toHaveBeenCalledWith('error');
  });
});
