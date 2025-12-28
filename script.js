function addStudent() {
  let name = document.getElementById("name").value;
  let roll = document.getElementById("roll").value;
  let className = document.getElementById("class").value;
  let marks = document.getElementById("marks").value;

  if (name === "" || roll === "" || className === "" || marks === "") {
    alert("Please fill all fields");
    return;
  }

  let table = document.getElementById("tableBody");
  let row = table.insertRow();

  row.insertCell(0).innerText = name;
  row.insertCell(1).innerText = roll;
  row.insertCell(2).innerText = className;
  row.insertCell(3).innerText = marks;

  document.getElementById("name").value = "";
  document.getElementById("roll").value = "";
  document.getElementById("class").value = "";
  document.getElementById("marks").value = "";
}
