document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.accordion-button');
  
    buttons.forEach(function(button) {
      button.addEventListener('click', function() {
        var targetId = button.getAttribute('data-target');
        var allSections = document.querySelectorAll('.accordion-section');
        var section = document.getElementById(targetId);
  
        // Hide all sections except the clicked one
        allSections.forEach(function(s) {
          if (s.id !== targetId) {
            s.style.display = 'none';
          }
        });
  
        // Toggle clicked section
        if (section.style.display === 'block') {
          section.style.display = 'none';
          console.log('Closed: ' + targetId);
        } else {
          section.style.display = 'block';
          console.log('Opened: ' + targetId);
        }
      });
    });
  });
  