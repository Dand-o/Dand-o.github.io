let scrollSpeed = 0.3; 
let lastPosition = window.pageYOffset || document.documentElement.scrollTop;

console.log("Script is running");

document.addEventListener("DOMContentLoaded", function() {
    let lastScrollY = window.scrollY;
    const scrollSpeed = 0.3;

    const dataFirst = [
        { characteristic: "Age", rationale: "13-65+ (will look at usability for the older generation, and see wether or not we can lessen the scope of the age range. Are 65+ year old getting their information from Twitter? If not, narrow scope) " },
        { characteristic: "Gender", rationale: "This is aimed at every gender. Misinformation does not discriminate."},
        { characteristic: "Language Proficiency", rationale: "I want to ensure the project is as accessible as it can be for a wide variety of audiences. By using infographics and interactive features, we can make it engaging for the younger generation, and also, for the 25+ audience, we can give options to expand information in finer detail. As long as we provide the hard hitting main facts at first and allow for a further look into the facts and figures) " },
        { characteristic: "Education Level", rationale: "As above. I want to make this available for younger folk, starting high-school, right up to university level educated students and adults."},
        { characteristic: "Attitude toward writer or organisation", rationale: "If we are focusing on Twitter/X, there could be a bias already from people who are already somewhat savvy to the problems that have surfaced on the platform and may have already developed thoughts and feeling towards Elon Musk."},
        { characteristic: "Knowledge of Topic", rationale: "Beginner and intermediate knowledge. There may be people who have a small degree of information literacy, but I want to delve a little deeper and provide information more than the typical check your sources, check the bias. By providing techniques and information on what it is they need to look out for when reading and engaging with online material. Such as the language used in articles. 'Dead' instead of 'killed' - showing bias towards a perpetrator."},
        { characteristic: "Audience Action", rationale: "The audience should feel engaged and want to continue to find out more about how they can stay smart online when it comes to dealing with news sources and information online. By telling it as a story, or creating interactive pieces where the audience have to select which article they believe to be 'right' or 'wrong' helps to challenge their thinking and provide mental stimulation."},
        
    ];

    const dataSecond = [
        { characteristic: "Accuracy", comments: "This website aims to educate and give advice on how to stay safer on the internet, there are various different sections related to different online issues. In this case, I want to focus on misinformation. They have a section regarding this topic, and the information on there is clear and concise. The writing itself is less about the facts of the issue, and more centred around how to help and what to do about misinformation. They link to other resources that are reliable and point to many helpful "},
        { characteristic: "Active voice", comments: "The active voice is used correctly and it's not used excessively at all. The writing seems very appropriate to the topic and, although much more conversation in points, it still reads like a reliable source of help and advice, with no jargon and useful explanations where needed. "},
        { characteristic: "Bias", comments: "From the misinformation section, the language seems to be free of bias, making no assumptions about younger people, or their parents. They guide the reader in a way that doesn't assume a persons skill or experience online due to their age, and gives clear explanations of ways in which things can be addressed in a broad and reassuring manner. "},
        { characteristic: "Clarity", comments: "I have slightly touched upon this above, but the language used is clear, concise and free of jargon. Where there are words that have to be used that describe a particular topic that may not be common knowledge, they make sure to explain or describe the topic in a very accessible way. "},
        { characteristic: "Conciseness", comments: "The website uses short sentence structure, and they get to the point very quickly. Clear language and clear graphics to spread the information in a pleasant way so the reader doesn't feel overwhelmed with the information on screen. "},
        { characteristic: "Conversational", comments: "Uses a conversational tone, makes It rather easy to read. Contractions used appropriately, and makes it feel easier to read and much more natural to read as well. "},
        { characteristic: "Correctness", comments: "Very well proof-read. No mistakes (that I can see) and seems professional and well edited. This is important for this particular kind of website, as this is giving advice and must seem reputable. Personally, if I were to find an obvious spelling mistake or the incorrect use of words, I would doubt the advice that is given."},
        { characteristic: "Parrallelism", comments: "Because of the nature of the text, there seems to be a lack of parallelism in the language. Theyre not trying to sell something, so there's not a huge need to be 'punchy'. But the one thing I notices is their used of examples are often in two's or three's:'Discuss who they follow, what types of adverts they see, and what stories they find surprising or suspicious.'"},
        { characteristic: "Strong Nouns and Verbs", comments: "'It can be tempting to share surprising or attention-grabbing online content with your child or your family group chats, but make sure to fact-check these links before you do.' This is a good example of not overdoing the strong nouns and verbs. They use them to accentuate their point, without causing the language to be too overwhelming and confusing. It still emphasises the point, without becoming too distracting. "},
        { characteristic: "Sentence variety", comments: "The variety in this page is very good. Not one single sentence starts with the same words. "},
        { characteristic: "Shorter paragraphs", comments: "They use a great lengths of sentences and paragraphs. Always keeping things short and concise, simple to ready and getting the point quickly. This is important for somebody who is seeking the information they are providing and ensuring it is easy to find and consume. "},
        { characteristic: "Positive Language", comments: "The language used is very carefully constructed to be as inclusive and bias free as possible. By doing so, the language itself comes across positive, even when talking about a negative. They use language to provide knowledge and advice on how to help identify misinformation, how to tackle it and what to do to help teach people to identify it. They encourage positivity, and so, naturally create a positive tone in their writing. "},
        { characteristic: "Tone and voice", comments: "There is a more informal tone to this website. But it doesn't lack formality either, it is conversational, and uses informality where appropriate, giving a nice conversational feel to the content whilst also keeping a professional tone where needed. "}
    ]
    function populateTable(tableId, data) {
        const tableBody = document.querySelector(`#${tableId} tbody`);
        if (!tableBody) {
            return;
        }

        data.forEach(item => {
            const row = tableBody.insertRow();
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            cell1.textContent = item.characteristic;
            cell2.textContent = item.comments || item.rationale;
        });
    }

    populateTable("data-table", dataFirst);
    populateTable("text-analysis", dataSecond);

        //week five table js


    

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






