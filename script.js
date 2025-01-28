document.getElementById("finish-quiz").addEventListener("click", function () {
    // Normalize user input
    const answer1 = document.getElementById("question1").value.trim().toLowerCase();
    const answer2 = document.getElementById("question2").value.trim().toLowerCase();
    const answer3 = document.getElementById("question3").value.trim().toLowerCase();

    // Normalize and store correct answers
    const correctAnswers = {
        question1: "a girl that i know; loves cats reads kind and silly; apple of my eye".replace(/\s+/g, " ").toLowerCase(),
        question2: "To go wrong in one's own way is better than to go right in someone else's.".toLowerCase(),
        question3: "This book is to be neither an accusation nor a confession, and least of all an adventure, for death is not an adventure to those who stand face to face with it. It will try simply to tell of a generation of men who, even though they may have escaped shells, were destroyed by the war."
            .replace(/\s+/g, " ")
            .toLowerCase(),
    };

    // Check if answers match
    const isAnswer1Correct = answer1 === correctAnswers.question1;
    const isAnswer2Correct = answer2 === correctAnswers.question2;
    const isAnswer3Correct = answer3 === correctAnswers.question3;

    const isPassed = isAnswer1Correct && isAnswer2Correct && isAnswer3Correct;

    // Display result
    const resultDiv = document.getElementById("result");
    resultDiv.style.display = "block";

    if (isPassed) {
        resultDiv.textContent = "You passed!";
        resultDiv.className = "result pass";
        setTimeout(() => {
            window.location.href = "you_passed.html";
        }, 2000); // Delay redirection to show result
    } else {
        resultDiv.textContent = "You failed. Try again!";
        resultDiv.className = "result fail";
        setTimeout(() => {
            window.location.href = "you_failed.html";
        }, 2000); // Delay redirection to show result
    }
});
