
const getproducts=async ()=>{
   const pro= await axios.get(`http://localhost:3000/api/products`)
   .catch(error => {
    console.log(error);
  });
   console.log(pro.data);
   let output =''
   pro.data.map((data)=>{
     output += `
    <ul>
        <li>ID : ${data._id}</li>
        <li>Title : ${data.title}</li>
        <li>Image : ${data.image}</li>
        <li>Description : ${data.description}</li>
        <li>Price : ${data.price}</li>
        <li>Created : ${data.created}</li>
    </ul>
`

})
document.getElementById("output").innerHTML = output;
}

getproducts()