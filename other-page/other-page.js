import { logout } from '../fetch-utils.js';

const logoutBtn = document.getElementById('logout');

// use checkAuth function to redirect is user not authenticated
// add event listener to the logout button and call logout
window.addEventListener('load', async () => {});

logoutBtn.addEventListener('click', async () => {
    logout();
});
