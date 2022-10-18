// template_2ukmvbh
//service_jfrmxqi
//CDD_h4itb5JCYuCv_

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

let isModalOpen = false;

function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal__open");
    
  }
  isModalOpen = true;
  document.body.classList += " modal__open";
}
