import bcrypt from "bcryptjs";

const users = [
    {
        firstName: 'Admin',
        lastName: 'Doe',
        email: 'Admin@email.com',
        password: bcrypt.hashSync('123456', 10),
        phoneNumber: 554582352,
        isAdmin: true,
    },
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@email.com',
        password: bcrypt.hashSync('123456', 10),
        phoneNumber: 554582353,
        isAdmin: false,
    },
    {
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'jane@email.com',
        password: bcrypt.hashSync('123456', 10),
        phoneNumber: 554582354,
        isAdmin: false,
    },
];

export default users;