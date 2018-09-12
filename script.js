$("button").click(() => {
  let name = $("input#name").val();
      let age = $("input#age").val();
      console.log(`${name} is ${age} years old`);
})
