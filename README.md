### Useless Web strcture

1.
add 
"homepage": "http://puni.haruhi.boats/",
and
"scripts": {
"start": "react-scripts start",
"build": "react-scripts build",
"test": "react-scripts test",
"eject": "react-scripts eject",
"predeploy": "gh-pages -d build",
"deploy": "npm run build"
},
to package.json

2
Install
npm install gh-pages

3
run 
npm run build
npm run deploy

4
add CNAME to public/
updaet github page settings


