
//Create Tutor table using sql if it doesn' exist
export const createTableTutor = `
CREATE TABLE IF NOT EXISTS Tutors (
    Name varchar(255),
    Subject varchar(255),
    availability_est varchar(255),
    pref_language varchar(255)
)`;

//Create Tutor table using sql if it doesn' exist
export const createTableTutee = `
CREATE TABLE IF NOT EXISTS Tutees (
    Name varchar(255),
    Subject varchar(255),
    availability_est varchar(255),
    pref_language varchar(255)
)`;




//Update Tutor table with new tutor data using sql if it doesn' exist
export const updateTableTutor = ` 
INSERT INTO Tutors
VALUES (data[0],data[1], data[2],data[3])
`;

//Update Tutee table with new tutor data using sql if it doesn' exist
export const updateTableTutee = ` 
INSERT INTO Tutees
VALUES (data[0],data[1], data[2],data[3])
`;



//fetch data for given Tutor 1D array of length 4 [name,subject, availibility, language]
export const fetchTutor = `
SELECT * FROM Tutors
WHERE name = data;
`;

//fetch data for given Tutee 1D array of length 4 [name,subject, availibility, language]
export const fetchTutee = `
SELECT * FROM Tutees
WHERE name = data;
`;






