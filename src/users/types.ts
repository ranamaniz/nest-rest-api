type ROLE = 'INTERN' | 'ENGINEER' | 'ADMIN';

type USER = {
  id: number;
  name: string;
  role: ROLE;
  email: string;
};

export type { ROLE, USER };
