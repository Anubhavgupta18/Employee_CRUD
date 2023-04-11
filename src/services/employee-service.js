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
            console.log('something went wrong in the repository layer');
        }
    }
}

module.exports = EmployeeService;
