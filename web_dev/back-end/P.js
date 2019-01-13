var fs = require('fs');

var users = [{
        nama: 'Andi',
        usia: 21
    },
    {
        nama: 'Budi',
        usia: 22
    },
    {
        nama: 'Caca',
        usia: 23
    },
];

fs.writeFileSync('users.json', JSON.stringify(users));