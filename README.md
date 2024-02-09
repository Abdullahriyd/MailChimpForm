--------How to Transfer any existing form into a MailChip Embedded Form---------

    --> action url, method="post" to form class="kv-ee-subscribe" --------or The targetted forms action property with method post.

    --> name="EMAIL" to id="fieldEmail" --------or Targetted email field with type attribute (Same for other field (with regarding type) and exactly spelled according to MailChimp form builder fields). Must have required="" attribute.

    --> type="submit" name="subscribe" id="mc-embedded-subscribe" value="Subscribe" to button class="kv-ee-submit" --------or Targetted submit button/label

    -->Need all attributes of submit lable of mailChim form (type="submit")

    -->And lastly the page must have the following jS-script
    <script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script><script type="text/javascript">(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';}(jQuery));var $mcj = jQuery.noConflict(true);</script></div>
    
    *****Important note:*****
    -->To avoide MailChimp Confirmation Thankyou page input an alternative page url to that page input area (Form Builder page)

    -->And finaly to make this change/incertion we need to inject a javascript code into the header or footer section

    -->The below JS is applied to https://vasisterhood.com/ to modify
    -->The fulll GPT code https://chat.openai.com/share/be62d2da-53f9-4eb4-b2f7-cabef3df059b

-->-------------EXAMPLE of a functional MailChimp form is form.html -------------------
-->-------------The required JavaScript which will modify the attributes and should be placed in header or footer is script.js-------------------------
