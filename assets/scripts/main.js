function changeIcon(){
    const activeIcon = document.querySelector(".terms-container.active > i");
    const inactiveIcons = document.querySelectorAll(".terms-container > i");
    inactiveIcons.forEach((icon) =>{
        icon.classList.remove("icon-minus");
        icon.classList.add("icon-plus");
    });
    activeIcon.classList.remove("icon-plus");
    activeIcon.classList.add("icon-minus") ;  
};

function collapseAllTerms(){
    const terms = document.querySelectorAll(".terms .collapse");
    terms.forEach((term) =>{
        term.classList.remove('show');
    });
};

function showCorrectTerm(id){
    const term = document.getElementById(id);
    term.classList.add('show');
};

function removeActiveFromTermNav(termNav){
    termNav.forEach((ele) => {
        ele.classList.remove('active');
    });
};

function showActiveTermNav(navEle){
    navEle.classList.add("active");
};

(function () {
    window.addEventListener('load', function() {
        const registrationNav = Array.from(document.querySelectorAll(".terms .terms-container"));
        registrationNav.forEach((element, index) => {
            element.addEventListener('click', (e) => {
                collapseAllTerms();
                showCorrectTerm(e.target.getAttribute("aria-controls"));
                removeActiveFromTermNav(registrationNav);
                showActiveTermNav(e.currentTarget);
                changeIcon();                 
            });
        });
    });
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
          };
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();


(function() {
    window.addEventListener('scroll', () => {
        $('.navbar-collapse.collapse').collapse('hide');    
    });
}())

changeIcon();