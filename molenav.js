

var backgroundDiv = document.createElement('div');
backgroundDiv.style.backgroundImage = "url('src/imgs/space.jpg')";
backgroundDiv.style.backgroundSize = "cover";
backgroundDiv.style.backgroundPosition = "center";
backgroundDiv.style.width = "100%";
backgroundDiv.style.height = "100%";
backgroundDiv.style.position = "fixed";
backgroundDiv.style.top = "0";
backgroundDiv.style.left = "0";
backgroundDiv.style.zIndex = "-1";
document.body.appendChild(backgroundDiv);

const comingSoonTitle = document.createElement('h1');
comingSoonTitle.textContent = 'Welcome to moleNAV';
comingSoonTitle.style.fontSize = '52px';
comingSoonTitle.style.textAlign = 'left';
comingSoonTitle.style.marginLeft = '5%';
document.body.appendChild(comingSoonTitle);

const newButton = document.createElement('button');
newButton.textContent = 'Click me!';
document.body.appendChild(newButton);