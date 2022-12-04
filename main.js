const fs = require('fs');

/* Get svg content */
let animation = fs.readFileSync('svg/animate.svg').toString();
let template = fs.readFileSync('svg/template.svg').toString();

/* Add animation et fonts */
template = template.replace('{{animation}}', animation);

fs.writeFile("final.svg", template, (err) => {
    if (err)
      console.log(err);
    else {
      console.log(fs.readFileSync("final.svg", "utf8"));
      console.clear();
    }
});


/* https://dopiaza.org/tools/datauri/index.php */