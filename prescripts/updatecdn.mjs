import { writeFile } from 'fs';
const pkgfile = {
    "name": "q78kg-website-npm-cdn",
    "version": "0.0.0-"+new Date().getTime()
}
writeFile('./npm-cdn/q78kg-website-npm-cdn/package.json', JSON.stringify(pkgfile), function (err) {
    if (err) {
        console.log(err);
    }
    console.log("Package.json file is created successfully.");
})