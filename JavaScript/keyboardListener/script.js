document.onkeydown = function (event) {
  if (event.ctrlKey && (event.shiftKey) && (event.key === 'H')) {
    alert('Вы нажали Ctrl+Shift+H');
  }
}
