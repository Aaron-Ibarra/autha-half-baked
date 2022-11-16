import { getUser, redirectIfLoggedIn, signInUser, signupUser } from './fetch-utils.js';

const signInForm = document.getElementById('sign-in');

const signUpForm = document.getElementById('sign-up');

redirectIfLoggedIn();

// Wire up sign in and sign up forms to supabase
signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(signUpForm);
    const email = data.get('email');
    const password = data.get('password');
    const user = await signupUser(email, password);
});

signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(signInForm);
    const email = data.get('email');
    const password = data.get('password');
    const user = await signInUser(email, password);

    if (user) {
        location.replace('/other-page');
    }
});
// Redirect to /other-page on successful auth
// Redirect to /other-page when page loads if user is authenticated
