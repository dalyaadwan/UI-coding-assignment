fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {
    console.log(data);
    displayDeck(data)
  })
  .catch((error) => console.error("FETCH ERROR:", error));

function displayDeck(data) {
  let count = 0;
  for (let i = 0; i < data.length; i++) {
    count += 1;
    const cards = data[i];
    const deck = document.getElementById("center");

    const col = document.createElement("div");
    col.className = "column";
    deck.appendChild(col);

    const card = document.createElement("div");
    card.className = "card";
    col.appendChild(card)

    const body = document.createElement("div");
    body.className = "card-body";
    card.appendChild(body)

    // name
    const name = cards.name;
    const heading = document.createElement("h3");
    heading.className = "card-title"
    heading.innerHTML = name;
    body.appendChild(heading);

    // address
    const address = cards.address
    street = document.createElement("p");
    street.className = "card-text"
    street.innerHTML = `${address.street}, ${address.suite}`
    body.appendChild(street);

    city = document.createElement("p");
    city.className = "card-text"
    city.innerHTML = `${address.city}, ${address.zipcode}`
    body.appendChild(city);

    const geo = address.geo
    coordinates = document.createElement("p");
    city.className = "card-text"
    coordinates.innerHTML = `${geo.lat}, ${geo.lng}`
    body.appendChild(coordinates);

    del = document.createElement("a");
    del.className = "fa fa-trash"
    del.href = "#"
    del.innerHTML = " Delete"
    del.onclick = function() {
      if (confirm("Are you sure you want to delete??")) {
        deck.removeChild(col);
        count -= 1;
        document.getElementById("record").innerHTML = `Showing ${count} Records`;
      }
    }
    body.appendChild(del)

  }
}
