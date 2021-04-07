# phase-1-final-project
Hello, My name is Luis Castro and this is my Beer Application.
The repository for my app is available online at: https://github.com/foreverluiscastro/phase-1-final-project
To the use this application, fork this repo into a local repository and navigate into the repo.
You should see an HTML and CSS sheet along with a src folder with the JS sheet nested inside.
The functionality of my Javascript is pretty simple:

-I use a fetch request to GET the Beers API
<br>
-I render all the Beers into an array
<br>
-I then iterate througth the array creating individual beers
<br>
-Each beer is then assigned a Div with a name, tagline and ABV% field for the corresponding key values
<br>
-I decided for additional functionality I would create a Description button for each beer
<br>
-Each button would then trigger a click event that when called upon, displays the description for each unique beer in a modal
<br>
-After 15 seconds the modal is removed from the screen until called upon again