let div = document.getElementById('post-wraper')

fetch('https://reqres.in/api/users?page=', {
     method: 'get'
}) 
.then(function(response){
   console.log(response);
   response.json()

})
.then(function(pasuxi){
   console.log(pasuxi);
   let ul = document.createElement('ul')
   
   pasuxi.data.forEach(element => {
      let li = document.createElement('li')
      li.textContent = `${element.id} ${element.emai}`
      li.style.color = element.color
      
   });
   ul.appendChild(li)
   div.appendChild(ul)
})
.catch(function(error){
   console.log(error);
   
})
//////
