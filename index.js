function  submitData(){
    const formData = {
        name: `{$name}`,
        email: `{$email}`
      };
    const config = {
        method: "POST",
        headers:{
                'Content-Type': 'application/json',
                "Accept": "application/json",
            },
    
             body: JSON.stringify
             ({ name: "Steve", email: "steve@steve.com" })
               };
    
    return  fetch('http://localhost:3000/users', config)
              .then((res)=>  res.json())
              .then(data => document.body.innerHTML = data.id)
              .catch(error => document.body.innerHTML = error.message)
          }
        