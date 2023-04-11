const bodyParser = require('body-parser');
const express = require('express');
const { Employee } = require('./models/index');
const db = require('./models/index');
const app = express();
const PORT = 3011;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const EmployeeRoutes = require('./routes/employee-routes');

app.listen(PORT, async () => {
    console.log(`Server started on PORT: ${PORT}`);
    //db.sequelize.sync({ alter: true });
});

app.use('/employees', EmployeeRoutes);



