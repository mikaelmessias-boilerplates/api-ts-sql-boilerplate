import { Request, Response } from 'express';
import knex from '../database/connection';

class UserController {
  async index(_request: Request, response: Response): Promise<Response<any>> {
    const users = await knex('users').select('*');

    if (!users) {
      return response.status(400).json({
        message: 'Found 0 users',
      });
    }

    const serializedUsers = users.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
    }));

    return response.json(serializedUsers);
  }

  async show(request: Request, response: Response): Promise<Response<any>> {
    const { id } = request.params;

    const user = await knex('users').where('id', id).select('*');

    if (!user) {
      return response.status(400).json({
        message: 'User not found',
      });
    }

    return response.json(user);
  }
}

export default UserController;
