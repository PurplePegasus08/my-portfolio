// Show only the selected section
function showSection(section) {
    document.querySelectorAll('.section').forEach(s => s.style.display = 'none');
    document.getElementById(section).style.display = 'block';
}



// Expand/Collapse Resume Function
function toggleResume() {
    let resumeImage = document.getElementById("resume-image");
    let toggleBtn = document.getElementById("toggle-btn");

    if (resumeImage.style.maxWidth === "800px") {
        resumeImage.style.maxWidth = "100%";
        toggleBtn.innerText = "Collapse Resume";
    } else {
        resumeImage.style.maxWidth = "800px";
        toggleBtn.innerText = "Expand Resume";
    }
}

// Download Resume Function
// Ensure jsPDF is available
function downloadResume() {
    const { jsPDF } = window.jspdf; 
    const resumeImageSrc = "Anurag ML Resume.png"; // Corrected filename

    let img = new Image();
    img.src = resumeImageSrc;
    img.crossOrigin = "anonymous"; // Prevents CORS issues

    img.onload = function () {
        console.log("Image loaded successfully!");

        let pdf = new jsPDF({
            orientation: img.width > img.height ? "landscape" : "portrait",
            unit: "px",
            format: [img.width, img.height]
        });

        pdf.addImage(img, "PNG", 0, 0, img.width, img.height);
        pdf.save("Anurag_ML_Resume.pdf");
    };

    img.onerror = function () {
        console.error("Image failed to load:", resumeImageSrc);
        alert("Error loading resume image! Check the file path.");
    };
}



// Toggle Skill Details
function toggleSkill(skillId) {
    let skillRow = document.getElementById(skillId);
    skillRow.style.display = (skillRow.style.display === "table-row") ? "none" : "table-row";
}
document.addEventListener("DOMContentLoaded", function () {
    function showSection(sectionId) {
        document.querySelectorAll(".section").forEach(section => {
            section.classList.add("hidden"); // Hide all sections
        });
        document.getElementById(sectionId).classList.remove("hidden"); // Show selected section
    }

    // Navigation Click Handling
    document.querySelectorAll("nav a").forEach(navLink => {
        navLink.addEventListener("click", function (event) {
            event.preventDefault();
            let sectionId = this.getAttribute("href").substring(1);
            showSection(sectionId);
        });
    });

    // Show the 'About' section by default on page load
    showSection("about");
});
document.querySelectorAll('.toggle-arrow').forEach(arrow => {
    arrow.addEventListener('click', () => {
        const parent = arrow.closest('.project-info');
        const paragraph = parent.querySelector('.skill-text');

        if (paragraph.style.maxHeight) {
            paragraph.style.maxHeight = null;
            arrow.textContent = "⌄";  // Collapse
        } else {
            paragraph.style.maxHeight = paragraph.scrollHeight + "px";
            arrow.textContent = "⌃";  // Expand
        }
    });
});
