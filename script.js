let current = 1;
const correctPin = "1402"; // ← เปลี่ยนรหัสตรงนี้

function nextPage() {
  document.getElementById(`page${current}`).classList.remove("active");
  current++;
  document.getElementById(`page${current}`).classList.add("active");
}

function checkPin() {
  const pin = document.getElementById("pin").value;
  if (pin === correctPin) {
    nextPage();
  } else {
    alert("รหัสไม่ถูกนะ ลองใหม่อีกครั้ง 💔");
  }
}

function restart() {
  document.getElementById(`page${current}`).classList.remove("active");
  current = 1;
  document.getElementById("page1").classList.add("active");
}

const startDate = new Date("2024-02-14"); // วันเริ่มคบ
setInterval(() => {
  const now = new Date();
  const diff = now - startDate;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  document.getElementById("timer").innerText =
    `${days} วันแห่งความรัก 💞`;
}, 1000);
