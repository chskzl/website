import os
import json
from PIL import Image, ExifTags

directory = 'newimg'

json_file = open("photoData.json", "r+")
data = json.load(json_file)

for filename in os.listdir(directory):
	os.system('cp ' + directory + '/' + filename + ' public/media/' + filename)
	os.system('/usr/bin/convert -thumbnail 200 newimg/' + filename + ' public/media/thumbnails/' + filename)
	img = Image.open(directory + '/' + filename)
	img_exif = img.getexif()

	title = ""
	date = img_exif[306]

	data.append({
		"filename": filename,
		"title": title,
		"date": date
	})

	os.system('rm ' + directory + '/' + filename)



json_file.seek(0)
json.dump(data, json_file, indent=4)