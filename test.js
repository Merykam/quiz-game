
const object=Array.from( document.getElementsByClassName('choix-text'));




let questions = [

    {
        choix0 :"Why is AWS more economical than traditional data centers for applications with varying compute workloads?", 
        choix1 :"Amazon EC2 costs are billed on a monthly basis",    
        choix2 :"Users retain full administrative access to their Amazon EC2 instances.", 
        choix3 :"Amazon EC2 instances can be launched on demand when needed.", 
        choix4 :"Users can permanently run enough instances to handle peak workloads.",
        answer : 2


    },
    {
        choix0 :"Which AWS service would simplify the migration of a database to AWS?", 
        choix1 :"AWS Storage Gateway",    
        choix2 :"AWS Database Migration Service (AWS DMS)", 
        choix3 :"Amazon EC2", 
        choix4 :"Amazon AppStream 2.0",
        answer : 1


    },
    {
        choix0 :" Which AWS offering enables users to find, buy, and immediately start using software solutions in their AWS environment?", 
        choix1 :"AWS Config",    
        choix2 :"AWS OpsWorks", 
        choix3 :"AWS SDK", 
        choix4 :"AWS Marketplace",
        answer : 4


    },

]

const questionIndex = Math.floor(Math.random() * questions.length);





for(let i=0; i<object.length; i++){
        
    object[i].innerText=questions[questionIndex]["choix" + i];

}


  


