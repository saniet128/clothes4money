// Simple demo interaction
const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Weitere Informationen folgen in Kürze.');
    });
});
