/* <--Start of Subscribtion form Integration -->

<!-- The JavaScript code is for integrating MailChimp with the Subscribtion Form -->
<!-- Developed by Aar Riyad (riyadhaar@gmail.com) -->*/


  // Function to update form action and attributes by class
  function updateFormAttributesByClass(formClass, actionValue, methodValue) {
      var formElements = document.getElementsByClassName(formClass);
      if (formElements.length > 0) {
          // Assuming there is only one form with the specified class
          var formElement = formElements[0];
          formElement.action = actionValue;
          formElement.method = methodValue;
      }
  }

  // Function to update input attributes by ID
  function updateInputAttributesById(inputId, attributeName, attributeValue) {
      var inputElement = document.getElementById(inputId);
      if (inputElement) {
          inputElement[attributeName] = attributeValue;
      }
  }

  // Function to update button attributes by class
  function updateButtonAttributesByClass(buttonClass, typeValue, nameValue, idValue, valueValue) {
      var buttonElements = document.getElementsByClassName(buttonClass);
      for (var i = 0; i < buttonElements.length; i++) {
          // Update the specified attributes
          buttonElements[i].type = typeValue;
          buttonElements[i].name = nameValue;
          buttonElements[i].id = idValue;
          buttonElements[i].value = valueValue;
      }
  }

  // Function to be executed after the page is fully loaded
  function onPageLoad() {
      // Update form attributes for a form with the class 'kv-ee-subscribe'
      updateFormAttributesByClass('kv-ee-subscribe', 'MailChimpFormLink', 'post');

      // Update input attributes for an element with the id 'fieldEmail'
      updateInputAttributesById('fieldEmail', 'name', 'EMAIL');

      // Update button attributes for a button with the class 'kv-ee-submit'
      updateButtonAttributesByClass('kv-ee-submit', 'submit', 'subscribe', 'mc-embedded-subscribe', 'Subscribe');
  }

  // Add an event listener for page load
  window.addEventListener('load', onPageLoad);


/*<!-- MailChimp provided JS at the bottom of embedded code (Don't remove thisß) -->
<script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script><script type="text/javascript">(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
<!-- MailChimp provided JS at the bottom of embedded code -->

<!-- End of Subscribtion form Integration -->*/