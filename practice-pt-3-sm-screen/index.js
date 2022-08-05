async function getAPIs() {
  let response = await fetch("https://api.publicapis.org/entries");
  let data = await response.json();
  return data;
}

function getAPIhtml(myAPI) {
  return `<div class="my-api">
        <div class="my-api-name">
            <a href="${myAPI.Lik}" target="_blank">${myAPI.API} (${myAPI.Category})</a>
        </div>
        <div class="my-api-description">${myAPI.Description}</div>
        <div class="my-api-auth">Auth: ${myAPI.Auth}</div>
        <div class="my-api-https">HTTPS: ${myAPI.HTTPS}</div>
    </div>`;
}

function displayAPIs(myAPIs) {
  let sampleAPI = myAPIs.entries[0];
  myAPIs = myAPIs.entries;
  document.body.innerHTML = `<div class="my-apis">
        ${myAPIs.map(getAPIhtml).join("")}
    </div>`;
}

getAPIs()
  .then(displayAPIs)
  .catch((e) => console.log(`Error: ${e}`));
