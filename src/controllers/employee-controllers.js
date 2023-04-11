const EmployeeService = require('../services/employee-service');

const employeeService = new EmployeeService();

const create = async (req, res) => {
    try {
        const employee = await employeeService.create(req.body);
        return res.status(201).json({
            employee,
            message:'Employee created successfully'
        });
    } catch (error) {
        return res.status(400).json({
            error,
            message: 'Something went wrong'
        });
    }
}

const getAll = async (req, res) => {
    try {
        const employees = await employeeService.getAll(req.query.offset,req.query.limit);
        return res.status(201).json({
            employees,
            message:'Employees fetched successfully'
        });
    } catch (error) {
        return res.status(400).json({
            error,
            message: 'Something went wrong'
        });
    }
}

const destroy = async (req, res) => {
    try {
        const employee = await employeeService.destroy(req.params.id);
        return res.status(201).json({
            employee,
            message:'Employee deleted successfully'
        });
    } catch (error) {
        return res.status(400).json({
            error,
            message: 'Something went wrong'
        });
    }
}

const get = async (req, res) => {
    try {
        const employee = await employeeService.get(req.params.id);
        return res.status(201).json({
            employee,
            message:'Employee fetched successfully'
        });
    } catch (error) {
        return res.status(400).json({
            error,
            message: 'Something went wrong'
        });
    }
}
const update = async (req, res) => {
    try {
        const employee = await employeeService.update(req.params.id,req.body);
        return res.status(201).json({
            employee,
            message:'Employee updated successfully'
        });
    } catch (error) {
        return res.status(400).json({
            error,
            message: 'Something went wrong'
        });
    }
}

module.exports = {
    create,
    getAll,
    destroy,
    get,
    update
}