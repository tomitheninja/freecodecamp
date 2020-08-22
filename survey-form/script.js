const formEl = document.getElementById("survey-form");
const userLinkEl = document.getElementById("user-link");
const experienceLinkEl = document.getElementById("experience-link");
const summaryLinkEl = document.getElementById("summary-link");

formEl.classList.add("with-js");

// The value will be used as className
const formPages = {
  user: "page-user",
  experience: "page-experience",
  summary: "page-summary"
};

let currentFormPage = "";

function changeFormPage(page) {
  formEl.classList.replace(currentFormPage || formPages.user, page);
  currentFormPage = page;
}

userLinkEl.addEventListener("click", () => changeFormPage(formPages.user));
experienceLinkEl.addEventListener("click", () =>
  changeFormPage(formPages.experience)
);
summaryLinkEl.addEventListener("click", () =>
  changeFormPage(formPages.summary)
);

const nextPageButtonEl = document.getElementById("next-page");
const prevPageButtonEl = document.getElementById("prev-page");

nextPageButtonEl.addEventListener("click", () => {
  switch (currentFormPage) {
    case formPages.user:
    case "":
      experienceLinkEl.click();
      break;
    case formPages.experience:
      summaryLinkEl.click();
      break;
  }
});

prevPageButtonEl.addEventListener("click", () => {
  switch (currentFormPage) {
    case formPages.experience:
      userLinkEl.click();
      break;
    case formPages.summary:
      experienceLinkEl.click();
      break;
  }
});
