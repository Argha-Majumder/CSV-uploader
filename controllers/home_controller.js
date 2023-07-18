const CSV = require('../models/csv_data');

module.exports.home = async function(req, res) {
    try {
        let csvs = await CSV.find({});
        //console.log(csv);
        return res.render('home',{
            csvs: csvs,
            title: "Home"
        });

    } catch (err) {
        console.log("Error in home controller",err);
        return res.redirect('back');
    }
}