const currencies={
    USD:{
    EURO:0.82,
    GBP:0.72,
    CAD:1.25,
    RWF:1.1200
    },
    CAD:{
        USD:0.80,
        EURO:0.85,
        GBP:0.57,
        RWF:800
    },
    EURO:{
        USD:0.012,
        GBP:0.88,
        CAD:1.54,
        RWF:1500,
    },
    GBP:{
        USD:1.33,
        EURO:1.15,
        CAD:1.77,
        RWF:1700
    },
    RWF:{
        USD:0.012,
        EURO:0.067,
        CAD:0.057,
        GBP:0.065
    }
}
function convertercurrency()
{

const new_amount=document.getElementById("amount").value;
const from_currency1=document.getElementById("from_currency").value;
const to_currency1=document.getElementById("to_currency").value;
var result=document.getElementById("result");


if(from_currency1==to_currency1){
result.innerHTML=new_amount;
}else{
    const converted = new_amount * currencies[from_currency1][to_currency1];
    result.innerHTML = converted;

}
}