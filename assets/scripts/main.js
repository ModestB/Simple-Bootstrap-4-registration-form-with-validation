function showFix(index){
    let terms = Array.from(document.querySelectorAll(".terms > .collapse"));
    if(terms[index].classList.contains('show')){
        terms[index].classList.remove('show')
    }  
}

function changeIcon(){
    let iconEleActive = document.querySelector(".terms-container.active > i");
    let iconEleInactive = document.querySelectorAll(".terms-container > i");

    iconEleInactive.forEach((icon) =>{
        icon.classList.remove("icon-minus")
        icon.classList.add("icon-plus")
    })
    iconEleActive.classList.remove("icon-plus");
    iconEleActive.classList.add("icon-minus")   
}

(function () {
    window.addEventListener('load', function() {
        let registrationNav = Array.from(document.querySelectorAll(".terms .terms-container"));

        registrationNav.forEach((element, index) => {
            element.addEventListener('click', (e) => {
                registrationNav.forEach((ele) => {
                    ele.classList.remove('active');
                })
                e.currentTarget.classList.add("active");
                changeIcon();
                showFix(index)
            })
        })
    })
})();

// BOOTSTRAP 4 form validation
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      let forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      let validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();

  changeIcon();