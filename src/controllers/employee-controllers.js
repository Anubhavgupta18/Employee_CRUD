const EmployeeService = require('../services/employee-service');

const employeeService = new EmployeeService();

const create = async (req, res) => {
    try {
        const response = await employeeService.create(req.body);
        return res.status(201).json({
            employee: response
        });
    } catch (error) {
        return res.status(400).json({
            message: 'Something went wrong'
        });
    }
}
const getAll = async (req, res) => {
    try {
        const response = await employeeService.getAll(req.query.offset,req.query.limit);
        return res.status(201).json(response);
    } catch (error) {
        return res.status(400).json({
            message: 'Something went wrong'
        });
    }
}

module.exports = {
    create,
    getAll
}