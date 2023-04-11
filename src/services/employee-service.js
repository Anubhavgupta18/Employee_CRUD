const { Employee, Emergency_contacts } = require('../models/index');

class EmployeeService {
    async create(data) {
        try {
            const employeeDetails = {
                name: data.name,
                email: data.email,
                mobile_number: data.mobile_number,
                jobtitle: data.jobtitle,
                address: data.address,
                city: data.city,
                state: data.state
            };

            const employee = await Employee.create(employeeDetails);
            const emergency_contact_details = {
                name: data.emergency_contact_name,
                mobile_number: data.emergency_contact_number,
                relationship: data.emergency_contact_relationship,
                employeeId: employee.dataValues.id
            };

            const emergency_contact = await Emergency_contacts.create(emergency_contact_details);
            await employee.addEmergency_contacts(emergency_contact);
            return employee;

        } catch (error) {
            throw { error };
            console.log('something went wrong in the service layer');
        }
    }
    async getAll(o, l) {
        try {
            if (l) {
                l = parseInt(l);
            }
            if (o) {
                o = parseInt(o);
            }
            const employees = await Employee.findAll({
                offset:o,
                limit:l
            });
            return employees;
        } catch (error) {
            throw { error };
            console.log('something went wrong in the service layer');
        }
    }

    async destroy(employeeId) {
        try {
            const employee = await Employee.findByPk(employeeId);
            if (!employee)
            {
                throw { error: 'Employee doesnt exist' };
            }
            await Employee.destroy({
                where: {
                    id: employeeId
                }
            });
            return employee;
        } catch (error) {
            throw { error };
            console.log('something went wrong in the service layer');
        }
    }

    async get(employeeId) {
        try {
            const employee = await Employee.findByPk(employeeId);
            if (!employee)
            {
                throw { error: 'Employee doesnt exist' };
            }
            return employee;
        } catch (error) {
            throw { error };
            console.log('something went wrong in the service layer');
        }
    }

    async update(employeeId, data) {
        try {
            const employee = await Employee.findByPk(employeeId);
            if (!employee)
            {
                throw { error: 'Employee doesnt exist' };
            }
            const response = await Employee.update(data, {
                where: {
                    id:employeeId
                }
            })
            return response;
        } catch (error) {
            throw { error };
            console.log('something went wrong in the service layer');
        }
    }
}

module.exports = EmployeeService;
