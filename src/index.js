const data = [
  {
    name: "indozer",
    location: "Ukraine",
  },
];

const source = "<h1>Hi, I'm {{name}}. I am from {{location}}</h1>";

let template = Handlebars.compile(source);

let result = template(data[0]);

document.getElementById("output").innerHTML = result;
