// ======================================================
// AI Learning Portal
// Combined Configuration + Main Script
// ======================================================


// ======================================================
// Import Libraries
// ======================================================

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-analytics.js";


// ======================================================
// Application Configuration
// ======================================================

const APP = {

    name: "AI Learning Portal",

    version: "1.0.0",

    author: "Aneshprabu",

    environment: "Development"

};


// ======================================================
// Supabase Configuration
// ======================================================

const SUPABASE_URL = "https://chpddsreyiznimnlljga.supabase.co";

const SUPABASE_ANON_KEY = "sb_publishable_UCOQDQyHuQUdSt8xvWU1_Q_pIcAr5pS";

const supabase = createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);


// ======================================================
// Firebase Configuration
// ======================================================

const firebaseConfig = {

    apiKey: "AIzaSyAHKJYUkR_hrMkpVFnM0MxVrbdWvFZMLKw",

    authDomain: "firstfirebase-6251a.firebaseapp.com",

    projectId: "firstfirebase-6251a",

    storageBucket: "firstfirebase-6251a.firebasestorage.app",

    messagingSenderId: "305076112487",

    appId: "1:305076112487:web:0580bdb217b7724cfbd8c2",

    measurementId: "G-3RYN4MG9YK"

};

const firebaseApp = initializeApp(firebaseConfig);

const analytics = getAnalytics(firebaseApp);


// ======================================================
// Website Starts Here
// ======================================================

document.addEventListener("DOMContentLoaded", async () => {

    console.clear();

    console.log("======================================");

    console.log(APP.name);

    console.log("Version :", APP.version);

    console.log("Environment :", APP.environment);

    console.log("======================================");


    // -----------------------------------
    // Button Click
    // -----------------------------------

    const startButton = document.getElementById("startBtn");

    if (startButton) {

        startButton.addEventListener("click", () => {

            alert("Training Module Coming Soon!");

        });

    }


    // -----------------------------------
    // Test Supabase Connection
    // -----------------------------------

    try {

        const { data, error } = await supabase

            .from("training_cards")

            .select("*")

            .limit(5);

        if (error) {

            console.error("Supabase Error");

            console.error(error);

        } else {

            console.log("Supabase Connected Successfully");

            console.table(data);

        }

    }

    catch (err) {

        console.error(err);

    }


    // -----------------------------------
    // Firebase Status
    // -----------------------------------

    console.log("Firebase Initialized Successfully");

    console.log(analytics);

});

// ======================================
// Load Header & Footer
// ======================================

async function loadComponent(id, file) {

    const element = document.getElementById(id);

    if (!element) return;

    try {

        const response = await fetch(file);

        const html = await response.text();

        element.innerHTML = html;

    }

    catch (error) {

        console.error("Unable to load:", file);

    }

}

document.addEventListener("DOMContentLoaded", () => {

    loadComponent("header", "components/header.html");

    loadComponent("footer", "components/footer.html");

});
