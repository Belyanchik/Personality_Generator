import * as data from "./data.js"

const createBtn = document.getElementById("createBtn");
createBtn.addEventListener("click", () => {
  if(Math.ceil(Math.random() * 2) == 1){
    const surname = data.surnames[Math.ceil(Math.random() * data.surnames.length) - 1];
    const name = data.male_names[Math.ceil(Math.random() * data.male_names.length) - 1];
    const patronymic = data.patronymics[Math.ceil(Math.random() * data.patronymics.length) - 1] + "ич";
  
    document.getElementById("surnamePlc").value = surname;
    document.getElementById("namePlc").value = name;
    document.getElementById("patronymicPlc").value = patronymic;
  }
  else{
    const surname = data.surnames[Math.ceil(Math.random() * data.surnames.length) - 1] + "а";
    const name = data.female_names[Math.ceil(Math.random() * data.female_names.length) - 1];
    const patronymic = data.patronymics[Math.ceil(Math.random() * data.patronymics.length) - 1] + "на";
  
    document.getElementById("surnamePlc").value = surname;
    document.getElementById("namePlc").value = name;
    document.getElementById("patronymicPlc").value = patronymic;
  };

  const birthdate = Math.ceil(Math.random() * 31) + "." + Math.ceil(Math.random() * 12) + "." + (Math.ceil(Math.random() * (2010 - 1950 + 1)) + 1950);
  const city = data.citys[Math.ceil(Math.random() * data.citys.length) - 1];
  const hobby = data.hobbys[Math.ceil(Math.random() * data.hobbys.length) - 1];
  let password = "";
  for(let i = 0; i != 8; i++){
    password = password + data.symbols[Math.ceil(Math.random() * data.symbols.length) - 1];
  };

  document.getElementById("birthdatePlc").value = birthdate;
  document.getElementById("cityPlc").value = city;
  document.getElementById("hobbyPlc").value = hobby;
  document.getElementById("passwordPlc").value = password;
})