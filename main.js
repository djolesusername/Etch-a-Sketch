addsq();
// Create divs and append them to container.

function addsq(n = 16) {
  let container = document.querySelector("#container");

  for (let i = 0; i < n * n; i++) {
    let content = document.createElement("div");
    content.classList.add("content");
    content.setAttribute("style", "background-color: white");
    container.appendChild(content);

    //Setting up the grid

    container.setAttribute(
      "style",
      `grid: repeat(${n}, auto) / repeat(${n}, auto)`
    );
  }
  colorme();
}

// Random background color for each / onmouseover

function colorme() {
  document.querySelectorAll(".content").forEach(
    content =>
      (content.onmouseover = () => {
        var color = Math.floor(Math.random() * 16777216).toString(16);
        content.setAttribute("style", `background-color: #${color}`);
      })
  );
}

//reset
function buttonreset() {
  document.querySelector("#container").innerHTML = "";
  let n = prompt("How many squares in one row would you like?");
  addsq(n);
}

// To black background color for each in 10 moves / onmouseover

function goblue() {
  let valueb = 100;
  document.querySelectorAll(".content").forEach(
    content =>
      (content.onmouseover = () => {
        content.setAttribute(
          "style",
          `background-color: hsl(190, 0%,${valueb}%)`
        );
        valueb -= 10;
      })
  );
}

// White background
function erase() {
  document.querySelectorAll(".content").forEach(
    content =>
      (content.onmouseover = () => {
        content.setAttribute("style", "background-color: white");
      })
  );
}
