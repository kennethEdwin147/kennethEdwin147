
(function () {
    const fs = require('fs');


    /* Get svg content */
    let animation = fs.readFileSync('svg/animate.svg').toString();
    let font = fs.readFileSync('svg/font.svg').toString();
    let template = fs.readFileSync('svg/template.svg').toString();

    /* Add animation, font and time*/
    template = template.replace('{{animation}}', animation);
    template = template.replace('{{font}}', font);
    template = template.replaceAll('{{date}}', getCurrentTime());

    /* Create a new svg */
    fs.writeFile("final.svg", template, (err) => {
        if (err)
            console.log(err);
        else {
            console.log(fs.readFileSync("final.svg", "utf8"));
            console.clear();
        }
    });

    function getCurrentTime() {
        const options = {
            month: "long",
            timeZone: 'America/Toronto'
        };
        return new Intl.DateTimeFormat('fr-fr', options).format(new Date());
    }

    
})();
