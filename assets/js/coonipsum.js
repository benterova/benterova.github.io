// Coon Ipsum Code :D


// Function to generate the string and (ideally) return.
function getCoonWords(maxWords) {
    var Words = [
        "Business",
        "Coonman",
        "Making some money",
        "tinder",
        "negotiations",
        "computer",
        "Porsche",
        "Oreos",
        "200 is the goal",
        "$50k added to the revenue",
        "Vehicle Virgins",
        "Chris",
        "Smashed some pizza",
        "Out to Grand Rapids",
        "In the budget",
        "Encounter",
        "obo",
        "GTR",
        "G-Class",
        "Honda Civic",
        "Life goals",
        "ROI",
        "Contract",
        "Retainer",
        "BMW",
        "In my price range",
        "Wealth",
        "Stem cell",
        "Doctor",
        "Grandpa",
        "Hydrogen power",
        "Sales",
        "upgrade",
        "probably",
        "soon",
        "a",
        "sister",
        "g-class",
        "bavarian",
        "German",
        "Camera",
        "Jordan",
        "Dad",
        "Dad's",
        "Calling",
        "Urban",
        "Brighton",
        "Snapchat",
        "California",
        "Resold",
        "ROI",
        "M3",
        "Conservative",
        "Burger",
        "King",
        "Train",
        "Second-hand",
        "Great",
        "Price",
        "Catholic",
        "Fs-700",
        "Technically",
        "Management",
        "Really",
        "Good",
        "Deal",
        "Calling",
        "Sales",
        "Bavarian",
        "it's just the lights",
        "Turbo",
        "ROI",
        "Somebody",
        "Elses",
        "Calling",
        "Stole",
        "Client",
        "Film",
        "Borrowed",
        "Grandpa",
        "Repair",
        "Client",
        "Tax",
        "Write",
        "Offs",
        "5 Series",
        "Savings",
        "pull the car up",
        "Probably",
        "911",
        "Panamotion",
        "Air",
        "Filters",
        "Dad's",
        "Calling",
        "All Set To Go",
        "Second-hand",
        "Probably",
        "Turbo",
        "Steinway",
        "Right",
        "project in chicago",
        "Now",
        "Conservative",
        "Sales",
        "Filters",
        "burger king",
        "Microfiber",
        "Technically",
        "Give",
        "German",
        "Joseph John Paul",
        "Jake Paul",
        "Expensive",
        "Reciprocation",
        "Mom’s hot",
        "Webasto",
        "Boost Followers",
        "Google Maps",
        "Bought",
        "Investment",
        "snapchat",
        "upper-middle-class",
        "trade anything for",
        "right now",
        "cheap cheap cheap",
        "cinema",
        "Dealership",
        "Microfiber",
        "Nice",
        "it was a pleasure meeting you.",
        "Eddie",
        "Partnership",
        "Vegas",
        "Maybe",
        "A7s battery",
        "Clients",
        "Investment",
        "Invoice",
        "cold call",
        "MILF",
        "write-off",
        "401k",
        "Blondes",
        "Mutual fund",
        "Retainer",
        "Catholics Mingle",
        "IQ",
        "200 is the goal",
        "Growth",
        "Appreciate",
        "Mild milf",
        "Porsche Upgrade",
        "Joseph",
        "John",
        "Rat",
        "Markup",
        "Dog price",
        "Work-life balance",
        "Dr. Coon",
        "Collin’s term of the week:"
    ];
    var wordCounter = 0;
    for (i = 0; i < maxWords; i++) {
        var whichWord = Math.floor(Math.random() * Words.length);
        wordCounter++;
        if (wordCounter == 7) {
            // Determine whether we should put a period, a comma, or an exclamation point.
            var punc = Math.floor(Math.random() * 3);
           if (punc == 1) {
                var finalParagraph = finalParagraph + ". " + Words[whichWord].charAt(0).toUpperCase() + Words[whichWord].substring(1) + " ";
            }
            if (punc == 2) {
                var finalParagraph = finalParagraph + "! " + Words[whichWord].charAt(0).toUpperCase() + Words[whichWord].substring(1) + " ";
            }
            if (punc == 3) {
                var finalParagraph = finalParagraph + ", " + Words[whichWord].toLowerCase() + " ";
            }
            wordCounter = 0;
        }
        else{
            if(finalParagraph == null){
                var finalParagraph = Words[whichWord].charAt(0).toUpperCase() + Words[whichWord].substring(1);
            }
            else{
                var finalParagraph = finalParagraph + " " + Words[whichWord].toLowerCase();

            }

        }
    }
    return finalParagraph;
}