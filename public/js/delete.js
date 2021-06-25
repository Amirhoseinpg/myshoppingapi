const form=document.querySelector(".form-signin")

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const id=document.querySelector(".form-control").value
    const methods=form.getAttribute("method")
    axios({
        url :`http://localhost:3000/api/products/${id}`,
        method : methods
   }).then(response => {
        window.location = "/"
   })
})