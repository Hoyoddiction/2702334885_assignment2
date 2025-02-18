document.querySelectorAll('.star').forEach(star => {
    star.addEventListener('click', function() {
        let rating = this.getAttribute('data-value');
        document.getElementById('rating-value').innerText = `You rated: ${rating} stars`;
        document.querySelectorAll('.star').forEach(s => s.classList.remove('selected'));
        
        this.classList.add('selected');
        this.previousElementSibling?.classList.add('selected');
        this.previousElementSibling?.previousElementSibling?.classList.add('selected');
        this.previousElementSibling?.previousElementSibling?.previousElementSibling?.classList.add('selected');
        this.previousElementSibling?.previousElementSibling?.previousElementSibling?.previousElementSibling?.classList.add('selected');
    });
});
