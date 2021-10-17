const app = require('./config/app');
const { importAdminSeeder } = require('./seedData/adminSeeder');

const PORT = process.env.PORT || 5555;  

importAdminSeeder();

app.listen(PORT, () => {
    // logger.info('Express app started on port ' + PORT);
    console.log("server listining at POrt ", PORT);
})


