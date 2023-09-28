
const apiUrl = 'https://opentdb.com/api.php?amount=10&category=23&type=multiple';

// Fetch data from the API
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Replace the dummy array with the API data
    questions = data.results.map(apiQuestion => {
      return {
        category: apiQuestion.category,
        type: apiQuestion.type,
        difficulty: apiQuestion.difficulty,
        question: apiQuestion.question,
        correct_answer: apiQuestion.correct_answer,
        incorrect_answers: apiQuestion.incorrect_answers
      };
    });

    // Now, the 'questions' array contains data from the API
    console.log(questions);

    // You can process the data or use it as needed in your project
  })
  .catch(error => {
    console.error('Error fetching data from the API:', error);
  });