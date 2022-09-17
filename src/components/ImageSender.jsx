import React, { useState } from 'react';

const ImageSender = (img_url) => {
	// const SerpApi = require('google-search-results-nodejs');
	// const search = new SerpApi.GoogleSearch("2ca1219386547fabe9c64388c663b907cffeedb3154fd71407a4adba6798927a");

	// const params = {
	// 	engine: "google_reverse_image",
	// 	image_url: "https://i.imgur.com/MqPF2wR.jpg"
	// };

	// const callback = function(data) {
	// 	console.log(data["image_results"]);
	// };

	// search.json(params, callback)

	const pythonCode = `
		from serpapi import GoogleSearch
		import json
		import requests
		from base64 import b64encode

		client_id = 'a0421819cba081e'

		headers = {"Authorization": "Client-ID " +  client_id}

		url = "https://api.imgur.com/3/upload.json"

		j1 = requests.post(
			url, 
			headers = headers,
			data = {
				'image': b64encode(open('./default.jpg', 'rb').read()),
				'type': 'base64',
				'name': '1.jpg',
				'title': 'Picture no. 1'
			}
		)
		data = json.loads(j1.text)['data']
		pic_url = data['link']

		print(pic_url)


		params = {
		"engine": "google_reverse_image",
		"image_url": pic_url,
		"q" : "spotted",
		"api_key": "2ca1219386547fabe9c64388c663b907cffeedb3154fd71407a4adba6798927a"
		}

		search = GoogleSearch(params)
		results = search.get_dict()

		try: results["image_results"]
		except KeyError:
			results["image_results"] = {}

		image_results = results["image_results"] 

		LanternFly = False
		for line in image_results:
			title = line['title']
			# print(title + "\n")
			if "lanternfly" in title.lower():
				LanternFly = True

		if LanternFly:
			print("Congrats, you've found a Spotted Lanternfly")
		else:
			print("Sorry, this is not a Spotted Lanternfly")
	`

	const pyodide = window.pyodide

	pyodide.runPython(pythonCode)
}

export default ImageSender;