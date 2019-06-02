# antiCSRF JavaScript and JQuery Function
Add dynamic anti CSRF token(s) to HTML forms and Ajax requests.

Require: JQuery Library version + 2.0

• Default Setup:

**antiCSRF({'token' : '123456'});**

This will add a dynamic input with NAME: token and VALUE: 123456 to all current HTML Forms and even Dynamically-added forms and a PARAMETER: token with VALUE: 123456 to all Ajax Requests.

• Advanced Setup:

**antiCSRF({'token' : '123456'}, { target: '#from_1'});**

This will add a PARAMETER: token with VALUE: 123456 to all Ajax Requests. Also it will add to the target JQuery's selector (**#from_1**) HTML Form(s).




**Note: the addedd parameter METHOD type is the same as the HTML Form / Ajax Request**

