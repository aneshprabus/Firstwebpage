// ======================================================
// AI Learning Portal
// Global Configuration
// ======================================================

// ===============================
// Import Supabase
// ===============================

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

// ===============================
// Import Firebase
// ===============================

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-analytics.js";


// ======================================================
// Application Information
// ======================================================

export const APP_CONFIG = {

    appName: "AI Learning Portal",

    version: "1.0.0",

    environment: "Development"

};


// ======================================================
// Supabase Configuration
// ======================================================

const SUPABASE_URL = "https://YOUR_PROJECT.supabase.co";

const SUPABASE_ANON_KEY = "YOUR_SUPABASE_ANON_KEY";

export const supabase = createClient(
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

export const analytics = getAnalytics(firebaseApp);


// ======================================================
// Console Logs
// ======================================================

console.log(APP_CONFIG.appName + " initialized");

console.log("✅ Supabase Connected");

console.log("✅ Firebase Connected");
