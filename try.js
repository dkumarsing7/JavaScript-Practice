let table_generator = () => {
  let num = document.querySelector("#num").value;
//   table.innerHTML = ``;
  const box = document.createElement('div')
  box.textContent = `Table of ${num}`
  for (let i = 1; i <= 10; i++) {
    let table = document.querySelector("#table");
    table.innerHTML += `<br>${num} x ${i} = ${num * i}`;
  }
};
