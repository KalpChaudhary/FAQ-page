const btnDown = document.querySelectorAll('.btn-down');
const quesContainer = document.querySelectorAll('.question-container');
const ansContainer = document.querySelectorAll('.answer-container');
const parentEl = document.querySelectorAll('.content');


parentEl.forEach(parEl => {
    parEl.addEventListener('click',function(e) {
        const btn = e.target.closest('.btn-down');
        if (!btn) return;
        console.log(btn);
        hideFunction(btn);
        showFunction(btn);
    })
})

const showFunction = function(btn){
    quesContainer.forEach(el => {
        if(el.dataset.ques=== btn.dataset.btn){
        el.classList.toggle('show');
        console.log('KAlp Caudhary');

        }
    })
}

const hideFunction = function(btn){
    ansContainer.forEach(el => {
        if(el.dataset.ans=== btn.dataset.btn){
            el.classList.toggle('hidden');
            console.log('KAlp');
            }    
        })
}

