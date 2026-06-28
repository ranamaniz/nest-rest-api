import { Injectable } from '@nestjs/common';
import { ROLE, USER } from './types';

@Injectable()
export class UsersService {
  private users: USER[] = [
    {
      id: 1,
      name: 'John Doe',
      role: 'ENGINEER',
      email: 'john.doe@example.com',
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'ADMIN',
      email: 'jane.smith@example.com',
    },
    {
      id: 3,
      name: 'Michael Johnson',
      role: 'INTERN',
      email: 'michael.johnson@example.com',
    },
    {
      id: 4,
      name: 'Emily Davis',
      role: 'ENGINEER',
      email: 'emily.davis@example.com',
    },
    {
      id: 5,
      name: 'David Wilson',
      role: 'ADMIN',
      email: 'david.wilson@example.com',
    },
    {
      id: 6,
      name: 'Sophia Brown',
      role: 'INTERN',
      email: 'sophia.brown@example.com',
    },
  ];

  findAll(role?: ROLE) {
    if (role) {
      console.log(role);
      return this.users.filter((user) => user.role === role);
    }

    return this.users;
  }

  findOne(id: number) {
    console.log(id);
    return this.users.find((user) => user.id === id);
  }

  create(user: Omit<USER, 'id'>) {
    const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id);

    const newUser = { id: usersByHighestId[0].id + 1, ...user };

    this.users.push(newUser);
    return newUser;
  }

  update(id: number, updatedUser: Partial<Omit<USER, 'id'>>) {
    this.users = this.users.map((user) =>
      user.id === id ? { ...user, ...updatedUser } : user,
    );
    return this.findOne(id);
  }

  delete(id: number) {
    const removedUser = this.findOne(id);
    this.users = this.users.filter((user) => user.id !== id);
    return { id, message: 'Successfully deleted the user', user: removedUser };
  }
}
