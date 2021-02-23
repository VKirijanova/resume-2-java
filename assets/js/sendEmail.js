function sendMail(contactForm) {
    emailjs.send("service_edl6rt5","template_t45mpqs", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response){
            console.log("SUCCESS", responce);
        },
        function(error){
            console.log("FAILED", error);
        });
        return false;
}