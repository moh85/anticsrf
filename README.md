# antiCSRF JavaScript and JQuery Function
Add dynamic anti CSRF token(s) to HTML forms and Ajax requests.

Require: JQuery Library version + 2.0

• Default Setup:

**antiCSRF({'token' : '123456'});**

This will add a dynamic hidden input with PARAMETER: token and VALUE: 123456 to all current HTML Forms and dynamically-added forms.

• Advanced Forms Setup:

**antiCSRF({'token' : '123456'}, { target: '#from_1'});**

This will add a PARAMETER (token) = 123456 the target JQuery's selector (**#from_1**) HTML Form.

------------------------------------------------------------------------------------------------------

**Note: By default, the plugin will add the token = value for all AJAX request in the request headers as KEY = VALUE, then you can deal with it on the server side. In PHP for example, you can get the list (array) of all request headers using: $headers = apache_request_headers();**

------------------------------------------------------------------------------------------------------

**Note: the addedd parameter METHOD type is the same for HTML Form / Ajax Request.**

