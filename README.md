Clone or download the repo at https://github.com/aeblskiver/testing.git <br>
You'll only need the public and resources folders from here <br>

<h4>Create deployd project directory</h4>
Commands: <br>
dpd create (directory-name) <br>
cd (directory-name) <br>
npm install dpd-fileupload --save <br>

<h4>Move necessary files from the repository</h4>
Replace the public and resources directories with the ones you got from my github <br>

<h4>Start the server</h4>
dpd -d <br>
This takes you to the dashboard. <br>
If there is no fileupload collection: <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Create a new resource (File Upload) and name it fileupload (This must be the same name as the form action in index.html) <br>
Click open on the top right to get to the webpage <br>
