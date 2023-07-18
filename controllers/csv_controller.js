const CSV = require('../models/csv_data');
const fs = require('fs');
const csvParser = require('csv-parser');
const path = require('path');

// uploading the csv file 
module.exports.upload = async function(req, res) {
    try {
        if (!req.file) {
            return res.status(400).send('No files are uploaded');
        }
        let csv = await CSV.create({
            fileName: req.file.originalname,
            filePath: req.file.path,
            file: req.file.filename
        });
        return res.redirect('back');
    } catch (error) {
        console.error(error);
        return res.status(500).send('Internal  Server Error');
    }
}

// viewing the csv data on view page
module.exports.view = async function(req, res) {
    try {
        let csv = await CSV.findOne({file: req.params.id});
        const results = [];
        const header = [];

        fs.createReadStream(csv.filePath)
          .pipe(csvParser())
          .on('headers',(headers)=>{
            headers.map((head)=> {
              header.push(head);
            })
          })
          .on('data', (row)=> {
              results.push(row);
          })
          .on('end',()=> {
            console.log("Success");
            res.render('csv_viewer', {
                title: "CSV Viewer",
                fileName: csv.fileName,
                header: header,
                results: results
            });
          });
    } catch (err) {
        console.log("Error in viewing files : ",err);
        return res.status(500).send("Internal sever error");
    }
}

// deleting the csv file
module.exports.delete = async function(req, res) {
    try {
        let csv = await CSV.findOne({file: req.params.id});
        if (csv) {
            await CSV.deleteOne({file: req.params.id});
            return res.redirect('back');
        } else {
            console.log("Error in deleteing csv files ***");
            return;
        }
    } catch (err) {
        console.log("Error in deleteing csv files : ", err);
        return;
    }
}