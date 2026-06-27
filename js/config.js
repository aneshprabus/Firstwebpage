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

const SUPABASE_URL = "YOUR_SUPABASE_URL";

const SUPABASE_ANON_KEY = "YOUR_SUPABASE_ANON_KEY";

const supabase = createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);


// ======================================================
// Firebase Configuration
// ======================================================

const firebaseConfig = {

    apiKey: "YOUR_FIREBASE_API_KEY",

    authDomain: "firstfirebase-6251a.firebaseapp.com",

    projectId: "firstfirebase-6251a",

    storageBucket: "firstfirebase-6251a.firebasestorage.app",

    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",

    appId: "1:305076112487:web:0580bdb217b7724cfbd8c2",

    measurementId: "YOUR_MEASUREMENT_ID"

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
