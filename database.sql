CREATE TABLE "images"
(
	"id" SERIAL PRIMARY KEY,
	"title" VARCHAR(120) NOT NULL,
	"path" VARCHAR(120) NOT NULL
);

CREATE TABLE "tags"
(
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(80) NOT NULL
);

CREATE TABLE "images_tags"
(
	"id" SERIAL PRIMARY KEY,
	"images_id" INT REFERENCES "images",
	"tag_id" INT REFERENCES "tags"
);

DROP TABLE "images_tags";


INSERT INTO "images"
	("title", "path")
VALUES
	('Abstract Shapes', 'images/AbstractShapes.jpg'),
	('Chroma Blast', 'images/Chroma.jpg'),
	('Color Burst', 'images/ColorBurst.jpg'),
	('Flower', 'images/Flower.jpg'),
	('Reflection', 'images/Reflection.jpg'),
	('InkCloud', 'images/InkCloud.jpg');

INSERT INTO "tags"
	("name")
VALUES
	('Energy'),
	('Calming'),
	('Inspirational'),
	('Frantic'),
	('Vertigo');

INSERT INTO "images_tags"
	("images_id", "tag_id")
VALUES
	(4, 3 ),
	(2, 3 ),
	(4, 1 ),
	(3, 2 ); 
