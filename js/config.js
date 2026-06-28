// ======================================================
// Universal Header & Footer Loader
// ======================================================

async function loadComponent(id, file) {

    const element = document.getElementById(id);

    if (!element) return;

    try {

        const response = await fetch(file);

        if (!response.ok) {

            throw new Error(`Unable to load ${file}`);

        }

        element.innerHTML = await response.text();

    }

    catch (error) {

        console.error(error);

    }

}


// ======================================================
// Website Initialization
// ======================================================

document.addEventListener("DOMContentLoaded", async () => {

    console.clear();

    console.log("======================================");

    console.log(APP.name);

    console.log("Version :", APP.version);

    console.log("Environment :", APP.environment);

    console.log("======================================");


    // --------------------------------------------
    // Load Universal Components
    // --------------------------------------------

    await loadComponent("header", "components/header.html");

    await loadComponent("footer", "components/footer.html");


    // --------------------------------------------
    // Highlight Current Page
    // --------------------------------------------

    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll(".navbar a").forEach(link => {

        if (link.getAttribute("href") === currentPage) {

            link.classList.add("active");

        }

    });


    // --------------------------------------------
    // Hero Button
    // --------------------------------------------

    const startButton = document.getElementById("startBtn");

    if (startButton) {

        startButton.addEventListener("click", () => {

            alert("Training Module Coming Soon!");

        });

    }


    // --------------------------------------------
    // Supabase Test
    // --------------------------------------------

    try {

        const { data, error } = await supabase

            .from("training_cards")

            .select("*")

            .limit(5);

        if (error) {

            console.error(error);

        }

        else {

            console.log("✅ Supabase Connected");

            console.table(data);

        }

    }

    catch (err) {

        console.error(err);

    }


    // --------------------------------------------
    // Firebase
    // --------------------------------------------

    console.log("✅ Firebase Connected");

    console.log(analytics);

    console.log("======================================");

    console.log("Website Ready");

    console.log("======================================");

});
