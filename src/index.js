const bodyParser = require('body-parser');
const express = require('express');
const { PORT } = require('./config/server-config');
const db = require('./models/index');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const EmployeeRoutes = require('./routes/employee-routes');

app.listen(PORT, async () => {
    console.log(`Server started on PORT: ${PORT}`);
    //db.sequelize.sync({ alter: true });
});

app.use('/employees', EmployeeRoutes);



