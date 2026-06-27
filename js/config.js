// =======================================
// AI Learning Portal
// Global Configuration
// =======================================

// Application Information

const APP_CONFIG = {

    appName: "AI Learning Portal",

    version: "1.0.0",

    author: "Your Name",

    environment: "Development"

};


// Future Supabase Configuration

const SUPABASE_CONFIG = {

    url: "https://jocuisqnrnkzzbontlqm.supabase.co",

    anonKey: "sb_publishable_rvLs-6kiyS8lCcDejyn31w_3bjJj0fL"

};


// Global Settings

const SETTINGS = {

    enableDarkMode: false,

    enableAnimations: true,

    enableConsoleLogs: true

};


// Utility Function

function log(message) {

    if (SETTINGS.enableConsoleLogs) {

        console.log(message);

    }

}
