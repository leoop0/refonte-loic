
  // GESTION DU SON
  
  var soundActivated = false; 
  
  function activeSound() { 
    if (soundActivated == false) {
      soundActivated = true;
      var x = document.getElementById('sound');
      x.innerHTML = 'sound on';
    }
    else if (soundActivated == true) {
      soundActivated = false;
      var x = document.getElementById('sound');
      x.innerHTML = 'sound off';
    }
  }
  
  function playSound(number) {
    if (soundActivated == true) {
      var audio = document.getElementById('son' + number);
      if (!audio.paused) {
        var audio = document.getElementById('son' + number);
        var audio2 = audio.cloneNode(true);
        audio2.volume = 1;
        audio2.play();
      }
      else {
        audio.volume = 1; 
        audio.play(); 
      }
    }
  }
  
  function stopSound(number) {
    var audio = document.getElementById('son' + number);
    audio.pause();
    audio.currentTime = 0;
  }
  




