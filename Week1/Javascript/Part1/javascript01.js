const person = [
    {
        name : "Mark" , 
        weight : 50 , 
        height : 1.5 
    } , 
    {
        name : "Join" , 
        weight : 60 , 
        height : 1.6
    }
]


const bmi = (weight, height) => {
    return weight /  (height * height)  ;   
}

const bmiRun = () => {
    const {weight , height , name } = person[0] ; 
    const {weight2 , height2, name :name2 } = person[1] ; 
    const bmi1 = bmi(weight ,height ) ; 
    const bmi2 = bmi(weight2 ,height2 ) ; 
    let markHigherBMI = bmi1 > bmi2 ; 
    return markHigherBMI ? `${name} nang hon ${name2}` :  `${name2} nang hon ${name}`  ; 
}

console.log(bmiRun()) ; 