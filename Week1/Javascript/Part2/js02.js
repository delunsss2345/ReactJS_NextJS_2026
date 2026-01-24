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
    const {weight : weight2 , height : height2, name :name2 } = person[1] ; 
    const bmi1 = Math.floor( bmi(weight ,height )) ; 
    const bmi2 = Math.floor(bmi(weight2 ,height2 )) ; 
    let markHigherBMI = bmi1 > bmi2 ; 
    return markHigherBMI ? `${name} (${bmi1})  nang hon ${name2} (${bmi2})` :  `${name2} (${bmi2})  nang hon ${name} (${bmi1})`   ; 
}
console.log(bmiRun()) ; 
