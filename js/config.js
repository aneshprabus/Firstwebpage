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

    url: "https://chpddsreyiznimnlljga.supabase.co",

    anonKey: "sb_publishable_UCOQDQyHuQUdSt8xvWU1_Q_pIcAr5pS"

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
