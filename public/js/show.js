
   const form=document.querySelector(".form-signin")

   form.addEventListener("submit",async (e)=>{
       e.preventDefault()
       const id=document.querySelector(".form-control").value
       const methods=form.getAttribute("method")
       const pro= await axios({
           url :`http://localhost:3000/api/products/${id}`,
           method : methods
      })
      console.log(pro.data);
      const data=pro.data
      let output =''
        output = `
       <ul>
           <li>ID : ${data._id}</li>
           <li>Title : ${data.title}</li>
           <li>Image : ${data.image}</li>
           <li>Description : ${data.description}</li>
           <li>Price : ${data.price}</li>
           <li>Created : ${data.created}</li>
       </ul>
   `
   document.getElementById("output").innerHTML = output;
   })





