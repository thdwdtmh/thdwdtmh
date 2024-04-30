function checkPassword() {
  var password = document.getElementById("passwordInput").value;
  if (password === "183204264") {
    document.getElementById("passwordDiv").style.display = "none";
    alert("Chào mừng đến với ngôi nhà của chúng ta !!!");
    document.body.style.overflow = "auto"; // Restore scrolling
  } else {
    alert("Mật khẩu sai rùi, lại đê bạn êi...");
  }
}

document.getElementById("passwordInput").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    checkPassword();
  }
});


// Lấy modal
var modal = document.getElementById('myModal');

// Lấy ảnh và thêm vào modal
var img = document.getElementById('img01');

var projectImgs = document.querySelectorAll('.project-img');

projectImgs.forEach(function (projectImg) {
  projectImg.addEventListener('click', function () {
    modal.style.display = 'block';
    img.src = this.querySelector('img').src;
  });
});

// Lấy nút đóng
var span = document.getElementsByClassName('close')[0];

// Khi người dùng click vào nút đóng, đóng modal
span.onclick = function () {
  modal.style.display = 'none';
};

// Khi người dùng click ra ngoài modal, đóng modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

// Khi người dùng nhấn phím Esc, đóng modal
window.onkeydown = function (event) {
  if (event.key === 'Escape') {
    modal.style.display = 'none';
  }
};


