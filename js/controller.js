function getInfoStudent() {
  var id = document.getElementById("txtMaSV").value;
  var name = document.getElementById("txtTenSV").value;
  var email = document.getElementById("txtEmail").value;
  var pass = document.getElementById("txtPass").value;
  var math = document.getElementById("txtDiemToan").value * 1;
  var physic = document.getElementById("txtDiemLy").value * 1;
  var chemistry = document.getElementById("txtDiemHoa").value * 1;

  return new Student(id, name, email, pass, math, physic, chemistry);
}

function showInfoStudent(student) {
  document.getElementById("txtMaSV").value = student.id;
  document.getElementById("txtTenSV").value = student.name;
  document.getElementById("txtEmail").value = student.email;
  document.getElementById("txtPass").value = student.pass;
  document.getElementById("txtDiemToan").value = student.math;
  document.getElementById("txtDiemLy").value = student.physic;
  document.getElementById("txtDiemHoa").value = student.chemistry;
}

function findStudent(idStu, arr) {
  return arr.findIndex((stu) => {
    return stu.id == idStu;
  });
}

function renderListStudent(render) {
  var contentHTML = "";
  render.forEach((item) => {
    var contentTr = `<tr>
    <td>${item.id}</td>
    <td>${item.name}</td>
    <td>${item.email}</td>
    <td>${item.AVG()}</td>
    <td>
    <button class="btn btn-warning" onclick="editStudent('${
      item.id
    }')">Sửa</button>
    <button class="btn btn-danger" onclick="deleteStudent('${
      item.id
    }')">Xóa</button>
    </td>
    </tr>`;
    contentHTML += contentTr;
  });
  document.getElementById("tbodySinhVien").innerHTML = contentHTML;
}
