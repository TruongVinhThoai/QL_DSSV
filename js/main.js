var ArrStudent = [];

var jsonData = localStorage.getItem("listStudent");

if (jsonData != null) {
  var list = JSON.parse(jsonData);
  ArrStudent = list.map((item) => {
    return new Student(
      item.id,
      item.name,
      item.email,
      item.pass,
      item.math,
      item.physic,
      item.chemistry
    );
  });
  renderListStudent(ArrStudent);
}

function addStudent() {
  var stu = getInfoStudent();
  ArrStudent.push(stu);

  localStorage.setItem("listStudent", JSON.stringify(ArrStudent));
  renderListStudent(ArrStudent);
}

function deleteStudent(id) {
  var index = findStudent(id, ArrStudent);
  ArrStudent.splice(index, 1);

  localStorage.setItem("listStudent", JSON.stringify(ArrStudent));
  renderListStudent(ArrStudent);
}

function editStudent(id) {
  var index = findStudent(id, ArrStudent);
  var student = ArrStudent[index];
  showInfoStudent(student);
  document.getElementById("txtMaSV").disabled = true;
}

function updateStudent() {
  var student = getInfoStudent();
  var index = findStudent(student.id, ArrStudent);
  ArrStudent[index] = student;

  localStorage.setItem("listStudent", JSON.stringify(ArrStudent));
  renderListStudent(ArrStudent);
}
