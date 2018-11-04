import { Router } from 'express';
import csv from 'fast-csv';
import multer from 'multer';
import Payslip from '../models/payslipModel';
const upload = multer({ inMemory: true }).single("csv");

export default ({ config, db }) => {
	let api = Router();

	// perhaps expose some API metadata at the root
	api.post('/csv', upload, async (req, res, next) => {
		try {
			let jsonCSV = [];
			csv.fromString(req.file.buffer.toString(), { headers: true })
				.on("data", function (data) {
					jsonCSV.push(new Payslip(data));
				})
				.on("end", function () {
					res.json(200, jsonCSV);
				});

		} catch (error) {
			next(error);
		}

	});

	return api;
}
