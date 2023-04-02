// login.js

const loginForm = document.getElementById("login-form");
const usernameInput = document.getElementById("username-input");
const userGreeting = document.getElementById("user-greeting");
const loginContainer = document.getElementById("login-container");

// 로그인 정보를 저장하고 화면에 사용자 이름을 출력합니다.
const login = (username) => {
  localStorage.setItem("username", username);
  userGreeting.textContent = `Hello ${username}`;
  loginContainer.style.display = "none";
};

// 이벤트 리스너를 등록합니다.
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = usernameInput.value.trim();
  if (username !== "") {
    login(username);
  }
});

// 초기 로딩 시 로그인 정보가 있다면 화면에 사용자 이름을 출력합니다.
const username = localStorage.getItem("username");
if (username) {
  login(username);
}
