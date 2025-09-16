// 1. Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyBQrSN31bs0dqpyZVT_IeGktPEy7rMrqcQ",
    authDomain: "yaswanth-fleet.firebaseapp.com",
    databaseURL: "https://yaswanth-fleet-default-rtdb.firebaseio.com",
    projectId: "yaswanth-fleet",
    storageBucket: "yaswanth-fleet.appspot.com",
    messagingSenderId: "44710091269",
    appId: "1:44710091269:web:6bffc1ab51aa52723e9a6c",
    measurementId: "G-LLY5VJN3N6"
};

// 2. Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// --- Global Variables ---
const pages = document.querySelectorAll('.page');
let profitLossChartInstance = null;
let revenuePieChartInstance = null;
let monthlyBusChartInstance = null;
const DIESEL_BUS_NUMBERS = ['9721', '9722', '9932', '9935', '9937', '9938', '4680', '4681', '4319', '4320'];

// --- Page Navigation ---
function showPage(pageId) {
    pages.forEach(page => page.style.display = 'none');
    const activePage = document.getElementById(pageId);
    if (activePage) activePage.style.display = 'block';
    
    document.getElementById('mobile-menu').classList.add('hidden');

    if (pageId === 'bus-wise-audit') {
        createOrUpdateCharts();
    }
}

// ======================================================= //
// AUDIT FUNCTIONS                                         //
// ======================================================= //

async function showAuditFile(month) {
    // ... (All your JS functions remain the same)
}

async function saveTableData() {
    // ...
}

// ======================================================= //
// DIESEL AUDIT FUNCTIONS                                  //
// ======================================================= //

async function showDieselFile(month) {
    // ...
}

// ... and so on for all the other JavaScript functions ...

// --- Event Listeners and Initial Load ---
document.getElementById('mobile-menu-button').addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.toggle('hidden');
});

window.onload = () => showPage('home');

// (The rest of your JavaScript functions: buildDieselTable, updateDieselTotals, createOrUpdateCharts, etc., would go here)
