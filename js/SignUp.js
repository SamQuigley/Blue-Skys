			function checkForm(){
				var user= document.getElementById('FirstName').value;
				if(user = '1' || '2' || '3'){
				alert("no no");
				return false;
				}
			}
			function validateForm() { //makes sure the user enters a valid email address
				var x = document.forms["newsletter"]["email"].value;
				var atpos = x.indexOf("@");
				var dotpos = x.lastIndexOf(".");
				if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
					alert("Not a valid e-mail address");
					return false;
			}
		}
		function validatorAccount(){ //makes sure the user checks the box and then submits their email address to the newsletter
			if($("#cbox").is(':checked'))
				alert("You have successfully Created your account!!");
			else
				alert("oops! you forgot to click the check box! try again!");
				return false;
		}
		function SignIn(){ //makes sure the user checks the box and then submits their email address to the newsletter
			if($("#cbox").is(':checked'))
				alert("You have confirmed you want to subscribe to our newsletter");
			else
				alert("oops! you forgot to click the check box!");
				return false;
		}

				
		
		
		
		
		
