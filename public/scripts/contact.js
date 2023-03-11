window.addEventListener('DOMContentLoaded', function () {
	var submitButton = document.getElementById("formSubmit");
    if (submitButton) {
        submitButton.addEventListener("click", submitMessage);
    }
});

function submitMessage() {

	var name = document.getElementById("formName").value;
	var email = document.getElementById("formEmail").value;
	var message = document.getElementById("formMessage").value;

    var re = /^[a-z0-9_\.-]+@[a-z0-9_\.-]+\.[a-z\.]+$/i;

    if (re.test(email)) {
        var formData = {
            "name": name,
            "email": email,
            "message": message
        };

        var requestData = JSON.stringify(formData);
        var request = new XMLHttpRequest();

        request.open("POST", "/send-message");
        request.setRequestHeader("Accept", "application/json");
        request.setRequestHeader("Content-Type", "application/json");
        request.addEventListener("load", function (event) {
            if (event.target.status !== 200) {
                alert("Something went wrong sending your message.");
            }
        });
        request.send(requestData);
    }
    else {
        alert("Pls enter valid email.");
    }
}
