function showModal(name, messageHTML) {
  document.getElementById("friendName").textContent = name;
  document.getElementById("message").innerHTML = messageHTML;
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
  document.getElementById("message").innerHTML = "";
}

window.onclick = function (e) {
  if (e.target.id === "modal") {
    closeModal();
  }
};
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
function filterFriends() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const friendButtons = document.querySelectorAll(".friend-btn");

  friendButtons.forEach((btn) => {
    const name = btn.innerText.toLowerCase();
    if (name.includes(input)) {
      btn.style.display = "flex"; 
    } else {
      btn.style.display = "none";
    }
  });
}
// scroll top แบบ smooth
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// แสดง/ซ่อนปุ่ม scroll top ตามตำแหน่ง scroll
window.addEventListener("scroll", () => {
  const scrollBtn = document.querySelector(".scroll-top-btn");
  if (window.scrollY > 300) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});
