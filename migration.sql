DROP TABLE IF EXISTS trailTable;

-- DB called trailDB, Table called trailTable --

CREATE TABLE trailTable (
    id SERIAL,
    name TEXT,
    location TEXT,
    distance DECIMAL(3,1),
    hard_surface BOOLEAN,
    hills BOOLEAN,
    military_id_needed BOOLEAN
);

INSERT INTO trailTable(name, location, distance, hard_surface, hills, military_id_needed) 
VALUES ('Konza Prairie', 'South of Manhattan', 6.2, false, true, false);