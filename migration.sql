DROP TABLE IF EXISTS trailTable;

-- DB called trailDB, Table called trailTable --

CREATE TABLE trailTable (
    id SERIAL,
    name TEXT,
    location TEXT,
    distance DECIMAL(4,1),
    hard_surface BOOLEAN,
    hills BOOLEAN,
    military_id_needed BOOLEAN
);

INSERT INTO trailTable(name, location, distance, hard_surface, hills, military_id_needed) 
VALUES ('Konza Prairie', 'South of Manhattan', 6.2, false, true, false);
INSERT INTO trailTable(name, location, distance, hard_surface, hills, military_id_needed) 
VALUES ('Konza Prairie Shorter Loop 1', 'South of Manhattan', 4.6, false, true, false);
INSERT INTO trailTable(name, location, distance, hard_surface, hills, military_id_needed) 
VALUES ('Konza Prairie Shorter Loop 2', 'South of Manhattan', 2.6, false, true, false);
INSERT INTO trailTable(name, location, distance, hard_surface, hills, military_id_needed) 
VALUES ('Linear Trail', 'Manhattan', 10, false, false, false);
INSERT INTO trailTable(name, location, distance, hard_surface, hills, military_id_needed) 
VALUES ('Riverwalk Trail', 'Junction City', 4.7, false, false, false);
INSERT INTO trailTable(name, location, distance, hard_surface, hills, military_id_needed) 
VALUES ('Anneberg Park', 'Manhattan', 2, true, false, false);
INSERT INTO trailTable(name, location, distance, hard_surface, hills, military_id_needed) 
VALUES ('Hudson Trail', 'Manhattan', 1, true, true, false);
INSERT INTO trailTable(name, location, distance, hard_surface, hills, military_id_needed) 
VALUES ('Washington/Marlatt Trail', 'North of Manhattan', 4, false, true, false);
INSERT INTO trailTable(name, location, distance, hard_surface, hills, military_id_needed) 
VALUES ('Moon Lake Trail', 'Fort Riley', 1, false, true, true);
INSERT INTO trailTable(name, location, distance, hard_surface, hills, military_id_needed) 
VALUES ('Whitside Loop Trail', 'Fort Riley', 2, true, true, true);
INSERT INTO trailTable(name, location, distance, hard_surface, hills, military_id_needed) 
VALUES ('Custer Hill Trails', 'Fort Riley', 11, true, true, true);
INSERT INTO trailTable(name, location, distance, hard_surface, hills, military_id_needed) 
VALUES ('City Park', 'Manhattan', 1, true, false, false);
INSERT INTO trailTable(name, location, distance, hard_surface, hills, military_id_needed) 
VALUES ('Fancy Creek', 'Manhattan', 6, false, false, false);
INSERT INTO trailTable(name, location, distance, hard_surface, hills, military_id_needed) 
VALUES ('Linear', 'Manhattan', 9, true, false, false);
INSERT INTO trailTable(name, location, distance, hard_surface, hills, military_id_needed) 
VALUES ('NorthEast Community Park', 'Manhattan', 2, true, false, false);
INSERT INTO trailTable(name, location, distance, hard_surface, hills, military_id_needed) 
VALUES ('Randolph State Park', 'Manhattan', 8, false, true, false);
INSERT INTO trailTable(name, location, distance, hard_surface, hills, military_id_needed) 
VALUES ('Kansas River Water Trail', 'Kansas', 173, false, false, false);
INSERT INTO trailTable(name, location, distance, hard_surface, hills, military_id_needed) 
VALUES ('Republican River Trail', 'Junction City', 9.6, false, false, false);