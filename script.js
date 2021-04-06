new Vue({
  el: "#flashcards-app",
  data: {
    questionInput:"",
    answerInput:"",
    categoryInput:"",
    cards:[
      {
        question:"What year was IUPUI founded?",
        answer:"1969",
        category:"history",
        flipped:false
      },
      {
        question:"What is 2+2?",
        answer:"Fish",
        category:"math",
        flipped:false
      },{
        question:"Is mayonnaise an instrument?",
        answer:"No",
        category:"science",
        flipped:false
      }
    ]
  },
  methods:{
    addCard:function(){
      this.cards.push({
        question:this.questionInput,
        answer:this.answerInput, 
        category:this.categoryInput,
        flipped:false
      })
      this.questionInput="";
      this.answerInput="";
      this.categoryInput="";
    }
  }
})