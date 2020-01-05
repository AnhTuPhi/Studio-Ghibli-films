const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(a => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

const h5 = document.createElement('p');
      h5.textContent = a.director;

      const h1 = document.createElement('h1');
      h1.textContent = a.title;

      const p = document.createElement('p');
      a.description = a.description.substring(0, 300);
      p.textContent = `${a.description}...`;
      
      const date = document.createElement('p');
      date.textContent = a.release_date;      

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
      card.appendChild(h5);
      card.appendChild(date);
    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}

request.send();