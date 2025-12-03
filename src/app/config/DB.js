const { default: mongoose } = require('mongoose');
const dbState = [
    { value: 0, label: 'Disconneted' },
    { value: 1, label: 'Connected' },
    { value: 2, label: 'Connecting' },
];
async function connect() {
    mongoose.set('strictQuery', true);
    await mongoose.connect('mongodb://localhost:27017/BanHang');
    const state = Number(mongoose.connection.readyState);
    console.log(dbState.find((f) => f.value === state).label, 'to database !');
}

module.exports = connect;
