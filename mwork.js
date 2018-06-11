var modal = document.getElementById('modal');
var openbtn = document.getElementById('openbtn');
var closebtn = document.getElementById('closebtn');

openbtn.addEventListener('click', openmodal);
closebtn.addEventListener('click', closemodal);

function openmodal() {
  modal.style.display = 'block';
  openbtn.style.display = 'none';
}

function closemodal() {
  modal.style.display = 'none';
  openbtn.style.display = 'block';
}
