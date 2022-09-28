const express = require("express");
const path = require("path");
const app = express();
const link_object = {
                        url_href: "https://www.asu.edu",
                        url_title: "Arizona State University",
                        title_font_face: "verdana",
                        title_font_weight: 700,
                        title_font_size_in_rem: 4
                };

app.get("/special_endpoint", (req, res) => {
	res.setHeader("Content-Type", "application/json");
	res.end(
		JSON.stringify(link_object)
	);
});

const port = process.env.PORT || 8080;
app.listen(port);
console.log("App is listening on port " + port);
