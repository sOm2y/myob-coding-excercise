import { version } from '../../package.json';
import { Router } from 'express';
import parse  from'csv-parse';
import  multer from 'multer';
import facets from './facets';
const upload = multer({ inMemory: true}).single("csv");

export default ({ config, db }) => {
	let api = Router();

	// mount the facets resource
	api.use('/facets', facets({ config, db }));

	// perhaps expose some API metadata at the root
	api.post('/csv', upload, async(req, res, next) => {
		try {
			// console.log(req.file);
			console.log(req);
			var csvString = req.file.buffer.toString();
			console.log(csvString);
			const parser = parse({delimiter: ','}, function(err, records){

			});
			parser.write(csvString);
			parser.end()
			// converter.fromString(csvString, function(err,result){
			// 	if(err)return res.send("ERR")
			// 	res.send(result);
			// }); 
		} catch (error) {
			next(error);
		}
	
	});

	return api;
}
