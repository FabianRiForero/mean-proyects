import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';

import employeeRoutes from './routes/employee.routes.js';

const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/employees', employeeRoutes);

export default app;