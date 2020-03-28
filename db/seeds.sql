INSERT INTO family (userCreated, dateCreated) VALUES ("davidcbalsley", "2020-03-28");
INSERT INTO family (userCreated, dateCreated) VALUES ("ryanmcmahon", "2020-03-28");

INSERT INTO individual (fname, lname, familyId, city, state, riskFactor) VALUES ("David", "Balsley", 1, "Chicago", "Illinois", 0);
INSERT INTO individual (fname, lname, familyId, city, state, riskFactor) VALUES ("Christine", "Balsley", 1, "Pittsburgh", "Pennsylvania", 0);
INSERT INTO individual (fname, lname, familyId, city, state, riskFactor) VALUES ("Ryan", "McMahon", 2, "Chicago", "Illinois", 0);

INSERT INTO symptoms (individualId, description, dateFirstAppeared) VALUES (1, "Fever", "2020-03-28");
INSERT INTO symptoms (individualId, description, dateFirstAppeared) VALUES (2, "Dry cough", "2020-03-28");

INSERT INTO needs (individualId, description, datePosted) VALUES (1, "Flour", "2020-03-28");
INSERT INTO needs (individualId, description, datePosted) VALUES (1, "A Mac desktop that is not 7 years old", "2020-03-28");