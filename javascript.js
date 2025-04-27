       // Get DOM elements
       const consentCheckbox = document.getElementById('consent-checkbox');
       const agreeBtn = document.getElementById('agree-btn');
       const cancelBtn = document.getElementById('cancel-btn');
       const scrollIndicator = document.querySelector('.scroll-indicator');
       const privacyContent = document.getElementById('privacy-content');
       const header = document.getElementById('header');
       const successAlert = document.getElementById('success-alert');
       const progressBar = document.getElementById('progress-bar');

       // States
       const state = {
           isChecked: false,
           hasScrolled: false,
           updateUI() {
               // button actions based on states
               agreeBtn.disabled = !this.isChecked;
           }
       };

       // Event listeners
       consentCheckbox.addEventListener('change', function() {
           state.isChecked = this.checked;
           state.updateUI();
       });

       agreeBtn.addEventListener('click', function() {
           if (state.isChecked) {
               // alert
               successAlert.classList.add('show');
               
               //alert duration 5 seconds
               setTimeout(() => {
                   successAlert.classList.remove('show');
               }, 4000);
               
               // additional server side code can be added here
               console.log('Since user has agreed to the privacy policy you can add aditional serverside logic here from this line');
           }
       });

       cancelBtn.addEventListener('click', function() {
           
           if (confirm('😭 why!')) {
               window.location.href = '/'; 
       });

       privacyContent.addEventListener('scroll', function() {
           if (privacyContent.scrollTop > 30 && scrollIndicator) {
               scrollIndicator.style.opacity = '0';
               setTimeout(() => {
                   scrollIndicator.style.display = 'none';
               }, 300);
           }

 
           const scrollHeight = privacyContent.scrollHeight - privacyContent.clientHeight;
           const scrolled = (privacyContent.scrollTop / scrollHeight) * 100;
           progressBar.style.width = scrolled + '%';
       });

 
       window.addEventListener('scroll', function() {
           const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
           const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
           const scrolled = (windowScroll / height) * 100;
           
           progressBar.style.width = scrolled + '%';

        
           if (windowScroll > 50) {
               header.classList.add('scrolled');
           } else {
               header.classList.remove('scrolled');
           }
       });

       
       state.updateUI();