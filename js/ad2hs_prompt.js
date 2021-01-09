let deferredPrompt;

const ad2hs_prompt_container = document.querySelector('#ad2hs-prompt-container');
const ad2hs_close_btn = document.querySelector('#ad2hs-close');
const ad2hs_btn = document.querySelector('#ad2hs-button');

ad2hs_prompt_container.style.display = 'none';

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();// Prevent Chrome 67 and earlier from automatically showing the prompt
  deferredPrompt = e;// Stash the event so it can be triggered later.
  // Update UI to notify the user they can add to home screen

  setTimeout(function(){  ad2hs_prompt_container.style.display = 'block'; }, 3000);

  ad2hs_btn.addEventListener('click', (e) => {
    ad2hs_prompt_container.style.display = 'none';  // hide our user interface that shows our A2HS button
    deferredPrompt.prompt(); // Show the prompt
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
          ad2hs_prompt_container.style.display = 'none';
        } else {
          console.log('User dismissed the A2HS prompt');
          ad2hs_prompt_container.style.display = 'none';
        }
        deferredPrompt = null;
      });
  }); 

  //cerrar ad2hs prompt
  ad2hs_close_btn.addEventListener('click', (e) => {ad2hs_prompt_container.style.display = 'none';});
});