let btn = document.querySelector(".btn");
let tab = document.querySelector(".table");
let count = localStorage.length;
let cap = document.createElement("caption");
let cont = document.querySelector(".container");
let alt = document.createElement("div");
let head = document.querySelector(".hea");
let dang = document.querySelector(".dang");

let deleteAll = () => {
  let rows = document.querySelectorAll("tr");
  console.log(rows.length);

  for (let i = rows.length - 1; i >= 1; i--) {
    rows[i].remove();
  }
  count = 0;
  cap.innerHTML = `You have ${count} tasks pending`;
  tab.before(cap);
};

const alertadd = () => {
  alt.innerHTML = `<div
  class="alert alert-danger d-flex justify-content-center"
  role="alert"
id="liveAlertPlaceholder"
>
The task input cannot be empty!!
</div>`;
  head.after(alt);
};

const alertrem = () => {
  cont.removeChild(alt);
};

let i = (a) => {
  return a + 1;
};

btn.addEventListener("click", () => {
  let task = document.getElementById("task");
  let taskss = task.value;
  if (taskss == "") {
    alertadd();
  } else {
    if (cont.contains(alt) == true) {
      alertrem();
    }
    count = i(count);
    cap.innerHTML = `You have ${count} tasks pending`;
    tab.before(cap);
    let addTable = `
  <tr>
  <th scope="row"><i class="bi bi-dot"></th>
  <td>${taskss}</td>
  <td><i class="bi bi-check-all"></i></td>
  <td><i class="bi bi-trash"></i></td>
  </tr>
  `;
    tab.innerHTML += addTable;
    task.value = "";
    updateDeletebtn();
  }
});

tab.addEventListener("click", (event) => {
  if (event.target.classList.contains("bi-trash")) {
    let row = event.target.closest("tr");
    row.remove();
    let done = row.childNodes[3];
    if (done.classList.contains("strike")) {
    } else {
      count--;
      cap.innerHTML = `You have ${count} tasks pending`;
      tab.before(cap);
    }
  }
});

tab.addEventListener("click", (event) => {
  if (event.target.classList.contains("bi-check-all")) {
    let rows = event.target.closest("tr");
    let done = rows.childNodes[3];
    done.classList.toggle("strike");
    if (done.classList.contains("strike")) {
      count--;
      cap.innerHTML = `You have ${count} tasks pending`;
      tab.before(cap);
    } else {
      count++;
      cap.innerHTML = `You have ${count} tasks pending`;
      tab.before(cap);
      return count;
    }
  }
});

dang.addEventListener("click", () => {
  let res = confirm("Are you sure");
  if (res) {
    console.log(res);
    deleteAll();
  }
});
