// template_2ukmvbh
//service_jfrmxqi
//CDD_h4itb5JCYuCv_
let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1/20;

function moveBackground(event){
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for(let i = 0; i < shapes.length; i++){
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px,${y * boolInt}px)`
    }
}


function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle ) {
    document.body.classList += " dark-theme"
  } 
  else {
    document.body.classList.remove("dark-theme")
  }
}

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visable";

  emailjs
    .sendForm(
      "service_jfrmxqi",
      "template_2ukmvbh",
      event.target,
      "CDD_h4itb5JCYuCv_"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visable");
      success.classList += " modal__overlay--visable";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visable");
      alert(
        "The email service is temporarily unavailable. Please contact me directly on: josephlewismoulton@gmail.com"
      );
    });
}

function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal__open");
  }
  isModalOpen = true;
  document.body.classList += " modal__open";
}
