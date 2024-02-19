<script>

  var aarSection = `
              <div id="mc_embed_shell">
                  <div id="mc_embed_signup">
                      <form class="kv-ee-subscribe kv-ee-form-success-hide kv-ee-form-container" action="https://gmail.us7.list-manage.com/subscribe/post?u=f08e491b7c5e2d5489cda7280&id=21d9dbe60a&f_id=0024e7e4f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">
                          <div class="kv-ee-section-text"> 
                              <div class="kv-ee-hidden-form-data" data-sectionid="1707318719080" data-pageid="home"></div> 
                              <h2 class="kv-ee-on_card kv-ee-section-title kv-ee-section-title--sm" data-type="text" tabindex="0">Subscribe<span data-prop="title" class="ck-editable-element" data-editable="basic" style="display:none;"></span>
                              </h2> 
                              <p class="kv-ee-on_card kv-ee-section-subtitle--sm" data-type="text" tabindex="0"><b>Hey sister! Sign Up here to stay up-to-date with events, Yappy Hours, and political happenings!</b><br><br><font class="cstm-cl kv-ee-custom-text-cl3 cstm-fnt" style="font-size: 130.1%;"><b>Don't worry - we will NEVER <br>share or sell your information!</b></font><span data-prop="subtitle" class="ck-editable-element" data-editable="basic" style="display:none;"></span></p>  
                          </div>
                          <div class="kv-ee-form-group" data-type="subscribe">
                              <input class="kv-ee-form-control" id="mce-EMAIL" type="email" placeholder="Enter your e-mail address" required="" data-validation-required-message="Please enter your email address." aria-invalid="false" aria-label="Enter your e-mail address" name="EMAIL" value="">
                          </div>
                          <div id="mce-responses" class="clear foot">
                              <div class="response" id="mce-error-response" style="display: none;"></div>
                              <div class="response" id="mce-success-response" style="display: none;"></div>
                          </div>
                          <div aria-hidden="true" style="position: absolute; left: -5000px;">
                              <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups -->
                              <input type="text" name="b_f08e491b7c5e2d5489cda7280_21d9dbe60a" tabindex="-1" value="">
                          </div>
                          <div class="kv-ee-captcha-field-wrapper"></div> 
                          <button class="kv-ee-button kv-ee-submit kv-ee-button-card kv-ee-button-md undefined kv-ee-button-dynamic-buttons kv-button-instant-edit undefined kv-ee-button-primary" data-index="0" data-type="button" tabindex="0" data-property="formData.submitButton" data-href="" type="submit" name="subscribe" id="mc-embedded-subscribe" value="Subscribe">
                              <div style="">Subscribe<div data-editable="button" data-prop="formData.submitButton.title" style="display:none;"></div></div>
                          </button> 
                          <div class="kv-ee-fieldSubscribe-container">
                              <label>
                                  <input type="checkbox" id="fieldSubscribe" value="true" style="display: none" data-namelabel="By submitting your information, you are granting us permission to email you. You may unsubscribe at any time." aria-label="By submitting your information, you are granting us permission to email you. You may unsubscribe at any time.">
                                  By submitting your information, you are granting us permission to email you. You may unsubscribe at any time.
                              </label>
                          </div> 
                      </form>
                  </div>
              </div>
          `;
    // Function to replace the form with a new form section by class
  
    function replaceFormByClass(oldClass, newHTML) {
        var oldForms = document.getElementsByClassName(oldClass);
        for (var i = 0; i < oldForms.length; i++) {
            // Create a new temporary element
            var tempElement = document.createElement('div');
            tempElement.innerHTML = newHTML.trim();
  
            // Replace the old form with the new form
            oldForms[i].parentNode.replaceChild(tempElement.firstChild, oldForms[i]);
        }
    }
    // Function to reset the email input section to its default state
    function resetEmailInputSection() {
          // Assuming the email input section has a specific ID, e.g., 'emailInputSection'
          var emailInputSection = document.getElementById('mce-EMAIL');
          if (emailInputSection) {
              // Set the email input section to its default state
              emailInputSection.style.display = 'block'; // Adjust as needed
              emailInputSection.value='';
          }
      }
  
    // Function to add a new class to an element by class
  function addClassToElementByClass(oldClass, newClass,) {
          var elements = document.getElementsByClassName(oldClass);
          for (var i = 0; i < elements.length; i++) {
              // Check if the element does not already have the new class
              if (!elements[i].classList.contains(newClass)) {
                  // Add the new class
                  elements[i].classList.add(newClass);
  
                  // Add a click event listener to hide the element and reset the email input section
                  elements[i].addEventListener('click', function () {
                      this.style.display = 'none';
                      resetEmailInputSection();
                  });
              }
          }
      }
      
      // Function to validate email format
      function isValidEmail(email) {
          // You can use a regular expression for email validation
          // This is a basic example, and you might want to use a more robust validation method
          var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return emailRegex.test(email);
      }
       
  
    // Function to be executed after the page is fully loaded
    function onPageLoad() {
        // Replace the form with the class 'kv-ee-subscribe'
        //var e = aarSection;
  
        replaceFormByClass('kv-ee-subscribe', aarSection);
  
          var subscribeButton = document.getElementById('mc-embedded-subscribe');
          if (subscribeButton) {
              // Add a click event listener to the subscribe button
              subscribeButton.addEventListener('click', function (event) {
                
                  // Get the email input field
                  var emailInput = document.getElementById('mce-EMAIL');
  
                  // Check if the email input is not blank and meets the email construction criteria
                  if (emailInput && emailInput.value.trim() !== '' && isValidEmail(emailInput.value)) {
                      // Additionally, you can manually submit the form data to a specified action link
                      var form = document.getElementById('mc-embedded-subscribe-form');
                      if (form) {
                          var actionLink = form.getAttribute('action');
                          form.submit();
                          addClassToElementByClass('kv-ee-contact-form-success', 'kv-ee-show');
                      }
                  } else {
                      // Handle validation error, e.g., display a message to the user
                      console.log('Please enter a valid email address.');
                  }
              });
          }       
  
    }
    
   
    window.addEventListener('load', onPageLoad());
        
  </script>
