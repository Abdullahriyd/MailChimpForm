-------- How to Transfer Any Existing Form into a MailChimp Embedded Form ---------


--> Action URL, method="post" to Form class="kv-ee-subscribe" -------- or The targetted Forms' action property with method post.

--> name="EMAIL" to id="fieldEmail" -------- or Targetted email field with type attribute (same for other fields (with regarding type) and exactly spelled according to MailChimp form builder fields). Must have the required="" attribute.

--> type="submit" name="subscribe" id="mc-embedded-subscribe" value="Subscribe" to button class="kv-ee-submit" --------or Targetted submit button/label

--> Need all attributes of the submit label of the MailChimp form (type="submit")

--> And lastly the page must have the following jS-script:
<script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script><script type="text/javascript">(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';}(jQuery));var $mcj = jQuery.noConflict(true);</script></div>

***Important note:***
--> To avoid the MailChimp Confirmation Thank-You page, input an alternative page URL to that page input area (Form Builder page)

--> And finally to make this change or insertion, we need to inject javascript code into the header or footer section

--> The below JS is applied to https://vasisterhood.com/ to modify
--> The full GPT code is: https://chat.openai.com/share/be62d2da-53f9-4eb4-b2f7-cabef3df059b

-->------------ EXAMPLE of a functional MailChimp form is form.html -------------------
-->------------ The required JavaScript, which will modify the attributes and should be placed in the header or footer, is script.js -------------------------
