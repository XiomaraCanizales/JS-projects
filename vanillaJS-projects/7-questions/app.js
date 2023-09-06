// option 1 => traversing the dom
/* const btns = document.querySelectorAll('.question-btn');

btns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        //console.log(e.currentTarget.parentElement.parentElement);
        const question = e.currentTarget.parentElement.parentElement;
        question.classList.toggle('show-text');
    });
}); */

// option 2 => using selectors inside the element

// select all questions
const questions = document.querySelectorAll('.question');
questions.forEach(function(question) {
  // select button from each question
  const btn = question.querySelector('.question_btn');
  // add click event to the button
  btn.addEventListener('click', function() {
    // close answer when other is been clicked
    questions.forEach(function(item) {
      console.log(item);
      console.log(question);
      if(item !== question) {
        item.classList.remove('show-text');
      }
    })
    // show answer
    question.classList.toggle('show-text');
  });
});