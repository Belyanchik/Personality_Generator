import * as data from "./data.js" //importing data to generate

const createBtn = document.getElementById("createBtn");
createBtn.addEventListener("click", () => {
  //information generation
  const surname = data.surnames[Math.ceil(Math.random() * data.surnames.length) - 1];
  const name = data.names[Math.ceil(Math.random() * data.names.length) - 1];
  const birthdate = Math.ceil(Math.random() * 31) + "." + Math.ceil(Math.random() * 12) + "." + (Math.ceil(Math.random() * (2010 - 1950 + 1)) + 1950);
  const city = data.citys[Math.ceil(Math.random() * data.citys.length) - 1];
  const hobby = data.hobbys[Math.ceil(Math.random() * data.hobbys.length) - 1];
  let password = "";
  for(let i = 0; i != 8; i++){
      password = password + data.symbols[Math.ceil(Math.random() * data.symbols.length) - 1];
};

  //output of information to fields
  document.getElementById("surnamePlc").value = surname;
  document.getElementById("namePlc").value = name;
  document.getElementById("birthdatePlc").value = birthdate;
  document.getElementById("cityPlc").value = city;
  document.getElementById("hobbyPlc").value = hobby;
  document.getElementById("passwordPlc").value = password;
})