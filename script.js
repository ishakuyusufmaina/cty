alert();
let a = document.querySelector('a[href="index.html"]');
if (!a) {
    a = document.createElement("a");
    a.setAttribute("href", "index.html");
    a.innerHTML = '<i class="fas fa-home"></i>';
    document.body.prepend(a);
    alert(a);
    
}
function finalizeExercise(exerciseElement) {
    // Remove the "Check Answers" button
    const checkAnswerButton = exerciseElement.querySelector("button");
    if (checkAnswerButton) {
        checkAnswerButton.remove();
    }

    // Make all input elements within the exercise non-editable
    const inputs = exerciseElement.querySelectorAll("input");
    inputs.forEach(input => {
        input.setAttribute("disabled", "true");
    });
}

  
  function showModal(exerciseDiv) {
    // Read the score from the total-score div
    const scoreText = document.getElementById("total-score").textContent;
    const scoreMatch = scoreText.match(/(\d+)/);
    const score = scoreMatch ? parseInt(scoreMatch[0]) : 0;
    const passingScore = 1.5; // 50% of 3

    // Create modal elements
    const modalOverlay = document.createElement("div");
    modalOverlay.className = "modal-overlay";

    const modal = document.createElement("div");
    modal.className = "modal";

    // Clone the exercise div and append to modal
    const exerciseClone = exerciseDiv.cloneNode(true);
    modal.appendChild(exerciseClone);

    // Create pass/fail message
    const message = document.createElement("p");
    if (score >= passingScore) {
        message.textContent = "Congratulations! You passed!";
        message.style.color = "#27ae60";

        // Link to the next lesson
        const nextLessonLink = document.createElement("a");
        nextLessonLink.href = "#"; // Replace "#" with the actual URL of the next lesson
        nextLessonLink.textContent = "Go to Next Lesson";
        nextLessonLink.className = "next-lesson-link";

        modal.appendChild(message);
        modal.appendChild(nextLessonLink);
    } else {
        message.textContent = "You did not pass. Keep studying and try again!";
        message.style.color = "#e74c3c";

        // "Study again" button to refresh the page
        const studyAgainButton = document.createElement("button");
        studyAgainButton.textContent = "Study Again";
        studyAgainButton.className = "study-again-button";
        studyAgainButton.onclick = () => location.reload();

        modal.appendChild(message);
        modal.appendChild(studyAgainButton);
    }

    // Append modal to overlay and overlay to body
    modalOverlay.appendChild(modal);
    document.body.appendChild(modalOverlay);

    // Add event listener to close the modal when clicking outside it
    modalOverlay.addEventListener("click", (event) => {
        if (event.target === modalOverlay) {
          //  document.body.removeChild(modalOverlay);
        }
    });
}

  
  
  
  
  
  function checkAnswers() {
    // Correct answers for each question and initial score
    const correctAnswers = {
        answer1: "6",
        answer2: "7",
        answer3: "11"
    };
    let score = 0;

    // Get each input and check the answer
    for (let [id, correctAnswer] of Object.entries(correctAnswers)) {
        const userAnswer = document.getElementById(id).value;
        const feedbackElement = document.getElementById(id + "-feedback");

        if (userAnswer === correctAnswer) {
            feedbackElement.textContent = "Correct!";
            feedbackElement.style.color = "#27ae60"; // Green for correct
            score += 1;
        } else {
            feedbackElement.textContent = `Incorrect. Correct answer is ${correctAnswer}.`;
            feedbackElement.style.color = "#e74c3c"; // Red for incorrect
        }
    }

    // Display the total score
    const resultDiv = document.getElementById("total-score");
    resultDiv.textContent = `Total Score: ${score} / 3`;
    
    
    
    let exr = document.querySelector(".exercise");
    let inputs = Array.from(document.querySelector("input"));
    finalizeExercise(exr);
    showModal(exr);
    
  }

