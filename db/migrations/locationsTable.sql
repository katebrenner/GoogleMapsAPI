\c mapdb

DROP TABLE IF EXISTS locations;

CREATE TABLE IF NOT EXISTS locations (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(60) NOT NULL,
  address VARCHAR(80) NOT NULL,
  lat REAL NOT NULL,
  lng REAL NOT NULL,
  -- hrs VARCHAR(255),
  venue_id INTEGER REFERENCES venue(venue_id)
);

