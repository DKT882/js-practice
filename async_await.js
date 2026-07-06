
async function getData(){
    let fukk=await fetch('https://www.youtube.com/watch?v=EL3PKEHggrE&list=PLDzeHZWIZsTo0wSBcg4-NMIbC0L8evLrD&index=57')
    let data=await fukk.json()
    console.log(data)
}
getData()

// for post request we add options in fatch function 
// eg:
/*
const response = await fetch("https://example.org/post", {
    method: "POST",
    body: JSON.stringify({ username: "example" }),
  // …
});
*/