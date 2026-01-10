const GAS_URL = 'https://script.google.com/macros/s/AKfycbyAzqLEqSMkNTNxNyltilSBxGy9xE8I6qY2bVAwcBri5i6BAIn1yJy30ahQ3TSU19fX/exec';
const YOUR_CLIENT_ID = '416770209134-tjtguj3gstg24fvvrtrj890p533bsuim.apps.googleusercontent.com';
const YOUR_REDIRECT_URI = 'https://hkzioncafe.github.io';
const lang_op = {
  'en': 'English',
  'zh': '繁體中文',
  'ko': '한국어',
};
const alertModal = new bootstrap.Modal(document.getElementById('alertModal'), {backdrop: 'static', keyboard: false});
const inputModal = new bootstrap.Modal(document.getElementById('inputModal'), {backdrop: 'static', keyboard: false});
const confirmModal = new bootstrap.Modal(document.getElementById('confirmModal'), {backdrop: 'static', keyboard: false});
const scanModal = new bootstrap.Modal(document.getElementById('scanModal'), {backdrop: 'static', keyboard: false});