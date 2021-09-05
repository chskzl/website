DROP TABLE IF EXISTS images;
CREATE TABLE images (
	id SERIAL,
	filename varchar(32),
	title varchar(32),
	date date,
	PRIMARY KEY (id)
);

INSERT INTO images (filename, title, date) VALUES
('IMG_2226.JPG', 'Pup', '2020-11-24'),
('IMG_2204.JPG', 'Robit', '2020-11-02'),
('IMG_2694.JPG', 'Paradise Valley, Nevada', '2021-05-20'),
('DSC_0224.JPG', 'What da dog doin?', '2021-03-28'),
('DSC_0236.JPG', 'Golden Boys', '2021-03-28'),
('IMG_2729.JPG', 'Road Closed', '2021-06-11'),
('IMG_2717.JPG', 'Road Closed', '2021-06-11'),
('IMG_2207.JPG', 'Hangin Out', '2020-11-02'),
('IMG_3069.JPG', 'Seattle Waterfront', '2021-08-21'),
('IMG_2915.JPG', 'Capytime', '2021-08-20'),
('IMG_2971.JPG', 'Wallaby', '2021-08-20'),
('IMG_2962.JPG', 'Birb', '2021-08-20'),
('IMG_2941.JPG', 'What even is this?', '2021-08-20');

SELECT * FROM images