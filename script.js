document.querySelectorAll('.lunch-select').forEach(select => {
  select.addEventListener('change', function() {
    const dayMenu = this.closest('.day-menu');
    const selectedLunch = dayMenu.querySelector('.selected-lunch');
    
    if (this.value) {
      selectedLunch.textContent = this.value;
      selectedLunch.style.color = '#333';
      selectedLunch.style.fontWeight = 'bold';
    } else {
      selectedLunch.textContent = '尚未選擇';
      selectedLunch.style.color = '#999';
      selectedLunch.style.fontWeight = 'normal';
    }
  });
});