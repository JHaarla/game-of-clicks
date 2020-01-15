## game-of-clicks
Game of Clicks is a React memory game. After each click/selection, the images are shuffled. The player should NOT click the same image twice... See how far you can get. It's tougher than it sounds.

### Under the Hood
This app uses React.js to render and update the DOM via state changes. When an image is clicked, it is flagged as clicked (not visible to the player). The images get shuffled. If the player clicks another not previously clicked image, their score increases. The app keeps a track of the player's current score and the high score and updates each via React state changes. If the player clicks every picture without any doubles, they win with a perfect score! Once the player clicks on an image that has already been clicked, the game is over...

Live deployment: [Game-of-Clicks](
