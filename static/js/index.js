function decide(ch) {
  if (ch == 1) {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
  } else if (ch == 0) {
    document.getElementById('register-form').style.display = 'block';
    document.getElementById('login-form').style.display = 'none';
  }
}
