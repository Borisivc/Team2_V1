jQuery.validator.addMethod("noSpace", function(value, element) { 
    return value == '' || value.trim().length != 0;  
}, "No space please and don't leave it empty");
jQuery.validator.addMethod("customEmail", function(value, element) { 
  return this.optional( element ) || /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test( value ); 
}, "Please enter valid email address!");
$.validator.addMethod( "alphanumeric", function( value, element ) {
return this.optional( element ) || /^\w+$/i.test( value );
}, "Letters, numbers, and underscores only please" );
$(function(){
    var $ingreso = $("#ingreso");
    if($ingreso.length){
        $ingreso.validate({
            rules:{
                username: {
                    required: true,
                    alphanumeric: true
                },
                password: {
                    required: true
                },  
            },
            messages:{
                username: {
                    required: 'Por favor ingrese usuario'
                },
                password: {
                    required: 'Por favor ingrese contraseña'
                }

            }
        }) 
    }
})
var $registrationForm = $('#registration');
if($registrationForm.length){
  $registrationForm.validate({
      rules:{
          username2: {
              required: true,
              alphanumeric: true
          },
          email: {
              required: true,
              customEmail: true
          },
          password2: {
              required: true
          },
          confirm: {
              required: true,
              equalTo: '#password'
          },
        }
  });
}
