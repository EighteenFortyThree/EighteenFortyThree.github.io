// Contact Form Variables & Function to Grab for Debugging and Submission Events
(function(){
  var myForm = document.getElementById('emailForm');
  var submitButton = document.getElementById('submitButton');
  var nameInput = document.getElementById('name');
  var emailInput = document.getElementById('email');
  var messageInput = document.getElementById('message');

  messageInput.textContent = '';

  console.log(messageInput.attributes);

// Contact Form Name Section Event Listener - Person Has to Type an Actual Name in Order to Submit Message (can't submit form without all contact forms filled out)
  nameInput.addEventListener('blur', function(event){
    var myName = nameInput.value;
    var validName = /^[0-9a-zA-Z\s]+$/.test(myName);
    console.log(myName);
    if(!validName){
      nameInput.classList.add('danger');
      submitButton.disabled = true;
    } else {
      nameInput.classList.remove('danger');
      submitButton.disabled = false;
    }
  });

// Contact Form Email Section Event Listener - Person Has to Type an Actual Email in Order to Submit Message (can't submit form without all contact forms filled out)
  emailInput.addEventListener('blur', function(event){
    var myEmail = emailInput.value;
    var validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(myEmail);
    console.log(myEmail);
    if(!validEmail){
      emailInput.classList.add('danger');
      submitButton.disabled = true;
    } else {
      emailInput.classList.remove('danger');
      submitButton.disabled = false;
    }
  });

//Contact Form Submit Button Event Listener - formspree.io sends submission to our email when user clicks submit
  myForm.addEventListener('submit', function(event) {
    document.getElementById('message').value.trim();
    myForm.setAttribute('action', 'https://formspree.io/18fortythree@gmail.com');
  });
}());
