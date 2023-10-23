DROP TABLE IF EXISTS trailTable;
DROP TABLE IF EXISTS trailSuggestionTable;
-- DB called trailDB, Table called trailTable --

CREATE TABLE trailTable (
    id SERIAL,
    name TEXT,
    location TEXT,
    distance DECIMAL(4,1),
    hard_surface TEXT,
    hills TEXT,
    military_id_needed TEXT
);

CREATE TABLE trailSuggestionTable (
    id SERiAL,
    name TEXT
);

INSERT INTO trailTable(name, location, distance, hard_surface, hills, military_id_needed) 
VALUES ('Konza Prairie', 'South of Manhattan', 6.2, 'gravel', 'hills', 'no');
INSERT INTO trailTable(name, location, distance, hard_surface, hills, military_id_needed) 
VALUES ('Konza Prairie Shorter Loop 1', 'South of Manhattan', 4.6, 'gravel', 'hills', 'no');
INSERT INTO trailTable(name, location, distance, hard_surface, hills, military_id_needed) 
VALUES ('Konza Prairie Shorter Loop 2', 'South of Manhattan', 2.6, 'gravel', 'hills', 'no');
INSERT INTO trailTable(name, location, distance, hard_surface, hills, military_id_needed) 
VALUES ('Linear Trail', 'Manhattan', 10, 'gravel', 'hills', 'no');
INSERT INTO trailTable(name, location, distance, hard_surface, hills, military_id_needed) 
VALUES ('Riverwalk Trail', 'Junction City', 4.7, 'gravel', 'flat', 'no');
INSERT INTO trailTable(name, location, distance, hard_surface, hills, military_id_needed) 
VALUES ('Anneberg Park', 'Manhattan', 2, 'paved', 'flat', 'no');
INSERT INTO trailTable(name, location, distance, hard_surface, hills, military_id_needed) 
VALUES ('Hudson Trail', 'Manhattan', 1, 'paved', 'hills', 'no');
INSERT INTO trailTable(name, location, distance, hard_surface, hills, military_id_needed) 
VALUES ('Washington/Marlatt Trail', 'North of Manhattan', 4, 'gravel', 'hills', 'no');
INSERT INTO trailTable(name, location, distance, hard_surface, hills, military_id_needed) 
VALUES ('Moon Lake Trail', 'Fort Riley', 1, 'gravel', 'hills', 'yes');
INSERT INTO trailTable(name, location, distance, hard_surface, hills, military_id_needed) 
VALUES ('Whitside Loop Trail', 'Fort Riley', 2, 'paved', 'hills', 'yes');
INSERT INTO trailTable(name, location, distance, hard_surface, hills, military_id_needed) 
VALUES ('Custer Hill Trails', 'Fort Riley', 11, 'paved', 'flat', 'yes');
INSERT INTO trailTable(name, location, distance, hard_surface, hills, military_id_needed) 
VALUES ('City Park', 'Manhattan', 1, 'paved', 'flat', 'no');
INSERT INTO trailTable(name, location, distance, hard_surface, hills, military_id_needed) 
VALUES ('Fancy Creek', 'Manhattan', 6, 'gravel', 'flat', 'no');
INSERT INTO trailTable(name, location, distance, hard_surface, hills, military_id_needed) 
VALUES ('Linear Park', 'Manhattan', 9, 'paved', 'flat', 'no');
INSERT INTO trailTable(name, location, distance, hard_surface, hills, military_id_needed) 
VALUES ('NorthEast Community Park', 'Manhattan', 2, 'paved', 'flat', 'no');
INSERT INTO trailTable(name, location, distance, hard_surface, hills, military_id_needed) 
VALUES ('Randolph State Park', 'Manhattan', 8, 'gravel', 'hills', 'no');
INSERT INTO trailTable(name, location, distance, hard_surface, hills, military_id_needed) 
VALUES ('Kansas River Water Trail', 'Kansas', 173, 'gravel', 'flat', 'no');
INSERT INTO trailTable(name, location, distance, hard_surface, hills, military_id_needed) 
VALUES ('Republican River Trail', 'Junction City', 9.6, 'gravel', 'flat', 'no');
INSERT INTO trailTable(name, location, distance, hard_surface, hills, military_id_needed) 
VALUES ('Army 10 mile route', 'Fort Riley', 10, 'paved', 'flat', 'yes');
INSERT INTO trailTable(name, location, distance, hard_surface, hills, military_id_needed) 
VALUES ('ACFT Route', 'Fort Riley', 2, 'paved', 'flat', 'yes');
