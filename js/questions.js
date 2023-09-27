// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    numb:1,
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "medium",
    question: "Who had a US and UK number 1 hit in 1962 with the instrumental, &#039;Telstar&#039;?",
    answer: "The Tornados",
    incorrect_answers: [
      "The Ventures",
      "The Spotnicks",
      "The Tremeloes"],
},
{
  numb:2,
  category: "Science: Computers",
  type: "multiple",
  difficulty: "medium",
  question: "All of the following programs are classified as raster graphics editors EXCEPT:",
  answer: "Inkscape",
  incorrect_answers: [
    "Paint.NET",
    "GIMP",
    "Adobe Photoshop"
  ]
},
    {
      category: "Entertainment: Music",
      type: "multiple",
      difficulty: "medium",
      question: "Which of these bands are NOT from Australia?",
      answer: "The Naked and Famous",
      incorrect_answers: [
        "Cut Copy",
        "Empire of the Sun",
        "Tame Impala"
      ]
  },
    {
    numb: 4,
    question: "Who wrote the play Romeo and Juliet?",
    answer: "William Shakespeare",
    options: [
      " Charles Dickens",
      "William Shakespeare",
      "Jane Austen",
      " Mark Twain"
    ]
  },
    {
    numb: 5,
    question: "Which famous document, signed in 1776, declared the American colonies' independence from Great Britain?",
    answer: "The Declaration of Independence",
    options: [
      "The Magna Carta",
      "The Emancipation Proclamation",
      "The Declaration of Independence",
      "The Bill of Rights"
    ]
  },
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];