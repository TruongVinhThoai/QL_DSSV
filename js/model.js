function Student(
  idStu,
  nameStu,
  emailStu,
  passStu,
  mathStu,
  physicStu,
  chemistryStu
) {
  this.id = idStu;
  this.name = nameStu;
  this.email = emailStu;
  this.pass = passStu;
  this.math = mathStu;
  this.physic = physicStu;
  this.chemistry = chemistryStu;

  this.AVG = function () {
    return ((this.math + this.physic + this.chemistry) / 3).toFixed(2);
  };
}
