const correctAnswers=['A','A','D','A','C','A','B','A','C','D'];
const form= document.querySelector('.quiz-form');
const res=document.querySelector('.result');
// console.log('fuck');
form.addEventListener('submit',e => {
    e.preventDefault();
    const answers=[form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value,form.q6.value,form.q7.value,form.q8.value,form.q9.value,form.q10.value];
    let score=0;
    answers.forEach((ans,index) => {
        if(ans === correctAnswers[index]){
            score = score + 10;
        }
    });
    scrollTo(0,0);
    res.classList.remove('d-none');
    
    let output=0;
   const timer = setInterval(() => {
    res.querySelector('span').textContent = `${output}%`;

    if(output === score){
        clearInterval(timer);
    }else{
        output++;
    }
   },10);
    
});