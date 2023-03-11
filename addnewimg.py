import os
import psycopg2
from PIL import Image, ExifTags

directory = 'newimg'

conn = psycopg2.connect(
	host="localhost",
	dbname="imagedata",
	user="postgres",
	password="postgres",
	port="5432"
)

cur = conn.cursor()

for filename in os.listdir(directory):
	os.system('cp ' + directory + '/' + filename + ' public/media/' + filename)
	os.system('/usr/bin/convert -thumbnail 200 newimg/' + filename + ' public/media/thumbnails/' + filename)
	img = Image.open(directory + '/' + filename)
	img_exif = img.getexif()

	title = ""
	date = img_exif[306]
	year = date[0:4]
	month = date[5:7]
	day = date[8:10]

	date = year + '-' + month + '-' + day

	print('Enter title for file ' + filename)
	title = raw_input()

	query = 'INSERT INTO images (filename, title, date) VALUES (%s, %s, %s);'
	cur.execute(query, (filename, title, date))

	os.system('rm ' + directory + '/' + filename)

cur.close()
conn.commit()
conn.close()
