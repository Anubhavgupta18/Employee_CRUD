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

            const primary_emergency_contact_details = {
                name: data.emergency_contact1_name,
                mobile_number: data.emergency_contact1_number,
                relationship: data.emergency_contact1_relationship,
                employeeId: employee.dataValues.id
            };
            // const secondary_emergency_contact_details = {
            //     name: data.emergency_contact2_name,
            //     mobile_number: data.emergency_contact2_number,
            //     relationship: data.emergency_contact2_relationship,
            //     employeeId: employee.dataValues.id
            // };

            if (primary_emergency_contact_details) {
                const emergency_contact1 = await Emergency_contacts.create(primary_emergency_contact_details);
                await employee.addEmergency_contacts(emergency_contact1);
            }
            // if (secondary_emergency_contact_details) {
            //     const emergency_contact2 = await Emergency_contacts.create(secondary_emergency_contact_details);
            //     await employee.addEmergency_contacts(emergency_contact2);
            // }
            return {...employee.dataValues,primary_emergency_contact_details};

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
            return true;
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
            const emergency_contact_details = await employee.getEmergency_contacts();
            return { ...employee.dataValues, emergency_contact_details };
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
            if (data.name) {
                employee.name = data.name;
            }
            if (data.email) {
                employee.email = data.email;
            }
            if (data.mobile_number) {
                employee.mobile_number = data.mobile_number;
            }
            await employee.save();
            return employee;
        } catch (error) {
            throw { error };
            console.log('something went wrong in the service layer');
        }
    }
}

module.exports = EmployeeService;
