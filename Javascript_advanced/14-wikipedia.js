function createElement(data) {
  const newP = document.createElement("p");
  newP.textContent = data;
  document.body.appendChild(newP);
}

function queryWikipedia(callback) {
  let r = new XMLHttpRequest();
  r.open(
    "GET",
    "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*"
  );
  r.send();
  r.onload = function () {
    const response = r.response;
    callback(response)
  };
}

queryWikipedia(createElement);
