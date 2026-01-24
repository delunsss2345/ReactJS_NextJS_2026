//	Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
//	Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// 	Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

const doi = [
    {
        name : "Dolphins" , 
        score : [96 , 108  , 89],
        avg : 0 
    }
    ,
    {
        name : "Koalas",
        score : [88 , 91   , 110] ,
        avg : 0 
    }
] ;

const avg = (diem) => {
    let sum = 0 ; 
    let l = diem.length ; 
    for(const t of diem ) {
        sum += t ; 
    }
    return Math.floor(sum / l) ; 
}
const comporeDoi = () => {
    for(const t of doi) {
       t.avg = avg(t.score) ; 
    }
    if(doi[0].avg > doi[1].avg) return `${doi[0].name} 'Diem cao hon' ${doi[1].name}` ; 
    else if(doi[0].avg < doi[1].avg) return `${doi[1].name} 'Diem cao hon' ${doi[2].name}` ; 
    return  `${doi[0].name} 'Bang diem nhau' ${doi[1].name}` ; 
   
}

console.log(comporeDoi())
