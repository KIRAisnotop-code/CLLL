let adminMode = false;
let password = "CLLL_admin"; // change this

// LOAD FROM JSON FILE
async function loadLevels() {
  const response = await fetch("levels.json");
  const levels = await response.json();

  renderLevels(levels);
}

function renderLevels(levels) {
  let container = document.getElementById("levels");
  container.innerHTML = "";

  levels.forEach((lvl, index) => {
    container.innerHTML += `
      <div class="level">
        <h2>#${index + 1} ${lvl.name}</h2>
        <p>Tier: ${lvl.tier}</p>
        <p>${lvl.reason}</p>
      </div>
    `;
  });
}

// ADMIN TOGGLE
function toggleAdmin() {
  let input = prompt("Enter admin password:");

  if (input === password) {
    adminMode = true;
    document.getElementById("adminPanel").classList.remove("hidden");
  } else {
    alert("Wrong password");
  }
}

// GENERATE JSON ENTRY (YOU COPY INTO FILE)
function generateJSON() {
  let name = document.getElementById("levelName").value;
  let tier = document.getElementById("tier").value;
  let reason = document.getElementById("reason").value;

  let entry = {
    name: name,
    tier: tier,
    reason: reason
  };

  document.getElementById("output").value =
    JSON.stringify(entry, null, 2);
}

// INIT
loadLevels();
