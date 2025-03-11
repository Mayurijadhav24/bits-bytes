function sendMail(){
    let parms={
        name:document.getElementById("name").value,
        name:document.getElementById("email").value,
        
        
    }
    emailjs.send("service_95ixt1w","template_bc0z0jr",parms).then(alert("Email Sent!!"));
}