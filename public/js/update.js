const form=document.querySelector(".form-signin")

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    const id=document.querySelector("#inputid").value
    const title=document.querySelector("#inputFullname").value
    const image=document.querySelector("#inputimage").value
    const description=document.querySelector("#inputdescription").value
    const price=document.querySelector("#inputprice").value

   axios.put(`http://localhost:3000/api/products/${id}`, {
    title:title.length>0?title:undefined,
    image:image.length>0?image:undefined,
    description:description.length>0?description:undefined,
    price:price.length>0?price:undefined,
  })
  .then(response => {
      window.location = "/"
  })
  .catch(error => {
    console.log(err);
  });
})