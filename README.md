# Documentation of Employee_CRUD API

## Setup The Project

- Clone the repository on your local
- Execute `npm install` on the same path as root directory of your project
- Create a `.env` file in the root directory of your project and add the following environment variables
  - `PORT=3000`
- Inside the `src/config` folder create a new file `config.json` and then add the following piece of json

```
{
  "development": {
    "username": <YOUR_DB_LOGIN_NAME>,
    "password": <YOUR_DB_LOGIN_PASS>,
    "database": "Flight_Search_DB",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

- Once you've added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create` and then execute `npx sequelize db:migrate`

## Employee API

### Employee Model

- model example:

```json
{
  "name": "your name",
  "email": "user@gmail.com",
  "mobile_number": "1234567890",
  "jobtitle": "developer",
  "address": "sample address",
  "state": "my state",
  "city": "my city"
}
```

### Emergency_contacts Model

- model example:

```json
{
  "name": "your name",
  "mobile_number": "1234567890",
  "relationship": "guardian",
  "employeeId": 100
}
```

### Routes

**Desc:** Create Employee

**Route:** `/employees/`

**Method:** `POST`

**Body:**

```json
{
  "name": "your name",
  "email": "user@gmail.com",
  "mobile_number": "1234567890",
  "jobtitle": "developer",
  "address": "sample address",
  "state": "my state",
  "city": "my city",
  "emergency_contact1_name":"john",
  "emergency_contact1_number":"1234567890",
  "emergency_contact1_relationship":"guardian"
}
```

**Response:**

Employee will be created with employee data in employee table and emergency contact data in emergency table and both the tables are linked via a foreignkey EmployeeId

```json
{
    "employee": {
        "id": 30,
        "name": "richeshk",
        "email": "rrichesssqsh11qk@gmail.com",
        "mobile_number": "9234567890",
        "jobtitle": "developer",
        "address": "kirti nagar",
        "city": "jodhpur",
        "state": "rajasthan",
        "updatedAt": "2023-04-11T15:41:50.641Z",
        "createdAt": "2023-04-11T15:41:50.641Z",
        "primary_emergency_contact_details": {
            "name": "dhawan",
            "mobile_number": "9209614089",
            "relationship": "father",
            "employeeId": 30
        }
    },
    "message": "Employee created successfully"
}
```

---

**Desc:** List Employees

**Route:** `/employees?limit=3&offset=0`

**Method:** `GET`

**Response:**
array of employees according to limit specified

```json
{
    "employees": [
        {
            "id": 17,
            "name": "anubhav gupta",
            "email": "anubhav1@gmail.com",
            "jobtitle": "developer",
            "mobile_number": "9829503712",
            "address": "kirti nagar",
            "city": "jodhpur",
            "state": "rajasthan",
            "createdAt": "2023-04-11T11:47:13.000Z",
            "updatedAt": "2023-04-11T11:47:13.000Z"
        },
        {
            "id": 18,
            "name": "richesh punwar",
            "email": "richesh@gmail.com",
            "jobtitle": "developer",
            "mobile_number": "9829503713",
            "address": "kirti nagar",
            "city": "jodhpur",
            "state": "rajasthan",
            "createdAt": "2023-04-11T11:48:01.000Z",
            "updatedAt": "2023-04-11T12:38:59.000Z"
        },
        {
            "id": 20,
            "name": "richesh",
            "email": "richesh1@gmail.com",
            "jobtitle": "developer",
            "mobile_number": "9829503715",
            "address": "kirti nagar",
            "city": "jodhpur",
            "state": "rajasthan",
            "createdAt": "2023-04-11T15:22:07.000Z",
            "updatedAt": "2023-04-11T15:22:07.000Z"
        }
    ],
    "message": "Employees fetched successfully"
}
```

---

**Desc:** Delete Employee

**Route:** `/employees/18`

**Method:** `DELETE`

**Response:**
Employee is deleted from db

```json
{
    "success":"true",
    "message": "Employee deleted successfully"
}
```

---

**Desc:** Get Employee

**Route:** `/employees/18`

**Method:** `GET`

**Response:**
Employee is fetched

```json
{
    "employee": {
        "id": 18,
        "name": "richesh punwar",
        "email": "richesh@gmail.com",
        "jobtitle": "developer",
        "mobile_number": "9829503713",
        "address": "kirti nagar",
        "city": "jodhpur",
        "state": "rajasthan",
        "createdAt": "2023-04-11T11:48:01.000Z",
        "updatedAt": "2023-04-11T12:38:59.000Z",
        "emergency_contact_details": [
            {
                "id": 4,
                "name": "dhawan",
                "mobile_number": "7073841514",
                "relationship": "father",
                "employeeId": 18,
                "createdAt": "2023-04-11T11:48:01.000Z",
                "updatedAt": "2023-04-11T11:48:01.000Z"
            }
        ]
    },
    "message": "Employee fetched successfully"
}
```

---

**Desc:** Update Employee(can used to update any details just by adding few similar lines of code)

**Route:** `/employees/18`

**Method:** `PATCH`

**Body:**
```json
{
  "name": "richesh punwarrrrr",
}
```


**Response:**
Employee is updated

```json
{
    "employee": {
        "id": 18,
        "name": "richesh punwarrrrr",
        "email": "richesh@gmail.com",
        "jobtitle": "developer",
        "mobile_number": "9829503713",
        "address": "kirti nagar",
        "city": "jodhpur",
        "state": "rajasthan",
        "createdAt": "2023-04-11T11:48:01.000Z",
        "updatedAt": "2023-04-11T16:15:58.597Z"
    },
    "message": "Employee updated successfully"
}
```