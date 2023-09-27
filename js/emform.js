// Get the email sharing form
const emailForm = document.getElementById('emailForm');

// Add a submit event listener to the form
emailForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from actually submitting

    // Get the user's email and message input
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    // Construct the email link with subject and body
    const subject = 'Quiz Results';
    const body = `I scored ${quizScore} on the quiz.${messageInput.value ? ' ' + messageInput.value : ''}`;
    const emailLink = `mailto:${emailInput.value}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open the default email client with the pre-populated email
    window.location.href = emailLink;
});

// Replace quizScore with the user's score.
