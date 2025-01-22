function nextStep(step) {
    const currentStep = document.querySelector('.form-step.active');
    const contactInfo = document.getElementById('contactInfo').value;
    const errorMessage1 = document.getElementById('errorMessage1');

    if (step === 2 && !contactInfo) {
        errorMessage1.style.display = 'block';
    } else {
        errorMessage1.style.display = 'none';
        currentStep.classList.remove('active');
        document.getElementById(`step${step}`).classList.add('active');
    }
}

function submitForm() {
    const companyName = document.getElementById('companyName').value;
    const errorMessage2 = document.getElementById('errorMessage2');

    if (!companyName) {
        errorMessage2.style.display = 'block';
    } else {
        errorMessage2.style.display = 'none';
        alert('Form submitted successfully!');
    }
}
const endDate = new Date(Date.now() + 72 * 60 * 60 * 1000);

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = endDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = 
        `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (timeLeft < 0) {
        clearInterval(countdownInterval);
        document.getElementById('countdown').innerHTML = "EXPIRED";
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call to display countdown immediately
