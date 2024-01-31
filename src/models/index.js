const Student = require("./Student");
const Degree = require("./Degree");
const Country = require("./Country");

// student.degreeId
Student.belongsTo(Degree);
Degree.hasMany(Student);

// student.countryId
Student.belongsTo(Country);
Country.hasMany(Student);