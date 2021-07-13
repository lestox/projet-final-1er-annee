CREATE TABLE super_heros
(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nom VARCHAR(15) NOT NULL,
    annee_creation INT NOT NULL,
    nombre_films_solo TINYINT NOT NULL,
    nombre_films_totaux TINYINT NOT NULL,
    salaire_dernier_film BIGINT, 
    envie_continuer VARCHAR(1),
    mort INT(4)
);



INSERT INTO super_heros (nom, annee_creation, nombre_films_solo, nombre_films_totaux, salaire_dernier_film, envie_continuer, mort) 
VALUES 
    ('Iron-Man', 2008, 3, 10, 75000000, 'N', 2019),
    ('Hulk', 2008, 1, 9, 15000000, 'Y', NULL),
    ('Thor', 2011, 3, 8, 15000000, 'Y', NULL),
    ('Captain America', 2011, 3, 9, 15000000, 'N', 2019),
    ('Black Widow', 2010, 0, 8, 15000000, NULL, 2021),
    ('Ant-Man', 2015, 2, 4, 8000000, 'Y', NULL),
    ('Doctor Strange', 2019, 1, 4, 6400000, 'Y', NULL),
    ('Spider-Man', 2016, 2, 4, 3000000, 'Y', NULL ),
    ('Black Panther', 2018, 1, 4, 2000000, NULL, NULL),
    ('CaptainMarvel', 2019, 1, 2, 15000000, NULL, NULL);