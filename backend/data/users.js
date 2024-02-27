import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Sa7bouch',
    email: 'sa7bouch@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
  },
  {
    name: 'hakim',
    email: 'hakim@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
  }
];

export default users;