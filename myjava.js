let scrollSpeed = 0.3; 
let lastPosition = window.pageYOffset || document.documentElement.scrollTop;

console.log("Script is running");

document.addEventListener("DOMContentLoaded", function() {
    let lastScrollY = window.scrollY;
    const scrollSpeed = 0.3;

    const tableBody = document.querySelector("#data-table tbody");

    const data = [
        { characteristic: "Age", rationale: "13-65+ (will look at usability for the older generation, and see wether or not we can lessen the scope of the age range. Are 65+ year old getting their information from Twitter? If not, narrow scope) " },
        { characteristic: "Gender", rationale: "This is aimed at every gender. Misinformation does not discriminate."},
        { characteristic: "Language Proficiency", rationale: "I want to ensure the project is as accessible as it can be for a wide variety of audiences. By using infographics and interactive features, we can make it engaging for the younger generation, and also, for the 25+ audience, we can give options to expand information in finer detail. As long as we provide the hard hitting main facts at first and allow for a further look into the facts and figures) " },
        { characteristic: "Education Level", rationale: "As above. I want to make this available for younger folk, starting high-school, right up to university level educated students and adults."},
        { characteristic: "Attitude toward writer or organisation", rationale: "If we are focusing on Twitter/X, there could be a bias already from people who are already somewhat savvy to the problems that have surfaced on the platform and may have already developed thoughts and feeling towards Elon Musk."},
        { characteristic: "Knowledge of Topic", rationale: "Beginner and intermediate knowledge. There may be people who have a small degree of information literacy, but I want to delve a little deeper and provide information more than the typical check your sources, check the bias. By providing techniques and information on what it is they need to look out for when reading and engaging with online material. Such as the language used in articles. 'Dead' instead of 'killed' - showing bias towards a perpetrator."},
        { characteristic: "Audience Action", rationale: "The audience should feel engaged and want to continue to find out more about how they can stay smart online when it comes to dealing with news sources and information online. By telling it as a story, or creating interactive pieces where the audience have to select which article they believe to be 'right' or 'wrong' helps to challenge their thinking and provide mental stimulation."},
        
    ];

    data.forEach(item => {
        const row = tableBody.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        cell1.textContent = item.characteristic;
        cell2.textContent = item.rationale;
        });

    window.addEventListener('scroll', function() {
        // Parallax effect
        let scrolledY = window.scrollY;
        let yOffset = -(lastScrollY * scrollSpeed);
        document.body.style.backgroundPosition = `0px ${yOffset}px`;
        lastScrollY = scrolledY;

        // Infinite scroll - to allow the user to scroll page, no complicated interactions.
        if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500)) {
            const content = document.getElementById("content");
        }
    });
});






