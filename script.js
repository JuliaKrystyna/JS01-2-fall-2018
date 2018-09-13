$("button").click(() => {
  let name = $("input#name").val();
      let age = $("input#age").val();
      document.write(`${name} is ${age} years old`);
})
