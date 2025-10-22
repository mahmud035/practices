import express from 'express';
import { logsController } from './logs.controller.js';

const router = express.Router();

// All Errors Logs
router.get('/errors', logsController.getAllErrorLogs);

// All Successes Logs
router.get('/successes', logsController.getAllSuccessLogs);

// Specific Error Log
router.get('/errors/:logfile', logsController.getSpecificErrorLog);

// Specific Success Log
router.get('/successes/:logfile', logsController.getSpecificSuccessLog);

export const logsRoutes = router;
