const { modifyTask } = require('./tasksController')();
const Task = require('../model/taskModel');

jest.mock('../model/taskModel');

describe('Given an modifyTask function', () => {
  test.only('Should call res.status with code 404', async () => {
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

    Task.findByIdAndUpdate.mockRejectedValueOnce('error');
    await modifyTask(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
  });
});
