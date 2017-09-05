$('#contact_form').submit(function(e) {
	e.preventDefault();
	var valid = true;
	var email = $("#email").val();
	var mess = $("#mesage").val();
	var nam = $("#name").val();
	var letters = /^[a-z]+$/;
	var at = email.indexOf("@");
	var dot = email.lastIndexOf(".");
	var missing = false;
	var inE = false;

	if(email=="" || mess=="" || nam==""){
		missing=true;
		valid=false;
	}

	if(email.match(letters)){
		if (at<1 || dot<at+2 || dot+2>=x.length)
		{
			inE=true;
		}
	}
	if(missing){
		alert("Some fields appear blank.");
	}

	if(inE){
		alert("Invalid e-mail address");
	}

	if(valid){
		$.ajax({
			url: '',
			method: 'POST',
			data:{
                Name:nam,
                Email:email,
                Message:mess,
                _subject:'message',
            },
            dataType: "json",
            success:function() {
                console.log('success');
                confirm("Your message has been sent!");
            }

		});
	} else {
		console.log('failure');
	}

});
