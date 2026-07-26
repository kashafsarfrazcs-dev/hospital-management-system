
#  Hospital Management System (MERN Stack)

A full-stack **Hospital Management System** developed using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**.  

This application helps manage hospital operations digitally by providing features for managing doctors, patients, and appointments through a modern web interface and RESTful APIs.


---

# Project Overview

The Hospital Management System is designed to simplify healthcare management processes by replacing manual record handling with a centralized digital platform.


The system allows administrators and hospital staff to efficiently manage:


- Doctor records

-  Patient information

-  Appointment scheduling

-  Medical management operations

---



# Project Overview



The Hospital Management System is designed to simplify healthcare management processes by replacing manual record handling with a centralized digital platform.



The system allows administrators and hospital staff to efficiently manage:



- Doctor records

- Patient information

- Appointment scheduling

- Medical management operations



The project follows a full-stack architecture where the React frontend communicates with the Node.js/Express backend through REST APIs, while MongoDB is used for database management.



---



# Features



## Doctor Management

- Add new doctors

- View doctor records

- Update doctor information

- Delete doctor records

- Manage doctor details including specialization and experience

- Add new patients

- View patient information

- Update patient records

- Delete patient records

- Maintain patient database

- Create appointments

- Manage doctor-patient appointments

- Store appointment details

- Track scheduled visits


---

##  CRUD Operations




Complete CRUD functionality implemented:


- Create records

- Read records

- Update records

- Delete records

---

## Backend API




- RESTful API architecture

- Express.js routes

- MongoDB database integration

- Mongoose data modeling



---



#  Technologies Used



## Frontend



- React.js

- JavaScript (ES6+)

- React Router

- Axios

- CSS3

- Vite



## Backend



- Node.js

- Express.js

- MongoDB

- Mongoose

- REST APIs



## Development Tools



- VS Code

- Git

- GitHub

- Postman

- MongoDB Atlas

- MongoDB Compass



---


# Project Structure



```

hospital-management-system

│

├── client                  # React Frontend

│   │

│   ├── public

│   ├── src

│   │   ├── components

│   │   ├── pages

│   │   ├── api

│   │   ├── styles

│   │   └── App.jsx

│   │

│   └── package.json

│

├── server                  # Node/Express Backend

│   │

│   ├── config              # Database configuration

│   ├── controllers         # Business logic

│   ├── middleware           # Custom middleware

│   ├── models              # MongoDB schemas

│   ├── routes              # API routes

│   ├── utils

│   ├── server.js

│   └── package.json

│

└── README.md

```



---



# Installation & Setup



## Clone Repository



```bash

git clone https://github.com/kashafsarfrazcs-dev/hospital-management-system.git

```



Navigate into project:



```bash

cd hospital-management-system

```



---



# Backend Setup



Move to server folder:



```bash

cd server

```



Install dependencies:



```bash

npm install

```



Create a `.env` file:



```env

PORT=5000



MONGO_URI=your_mongodb_connection_string

```



Start backend server:



```bash

npm run dev

```



Backend will run on:



```

http://localhost:5000

```



---



# Frontend Setup



Open another terminal:



```bash

cd client

```



Install dependencies:



```bash

npm install

```



Start React application:



```bash

npm run dev

```



Frontend will run on:



```

http://localhost:5173

```



---



# Environment Variables



The backend requires environment variables for configuration.



Example:



```env

PORT=5000

MONGO_URI=your_database_connection_string

```


#  API Features



The backend provides APIs for:



### Doctor Routes



```

GET    /api/doctors

POST   /api/doctors

PUT    /api/doctors/:id

DELETE /api/doctors/:id

```



### Patient Routes



```

GET    /api/patients

POST   /api/patients

PUT    /api/patients/:id

DELETE /api/patients/:id

```



### Appointment Routes



```

GET    /api/appointments

POST   /api/appointments

PUT    /api/appointments/:id

DELETE /api/appointments/:id

```



---

# Future Improvements



Future enhancements planned:


-  User authentication with JWT

-  Role-based access control

-  Admin dashboard with analytics

-  Billing management

- User authentication with JWT

- Role-based access control

- Admin dashboard with analytics

- Billing management

- Medical history tracking

- Improved mobile responsiveness



---

# Learning Outcomes



Through this project, I practiced:



- Full-stack MERN development

- Building REST APIs

- MongoDB database design

- React component development

- Frontend-backend integration

- CRUD operations

- Git and GitHub workflow



---

# Author



**Kashaf Sarfraz**



Computer Science Student 

---


#  Support

If you like this project, consider giving it a ⭐ on GitHub.

---


