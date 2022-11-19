// const encodedParams = new URLSearchParams();
// encodedParams.append("q", "Ami ");
const englishText=document.getElementById("englishText");
const banglaText=document.getElementById("banglaText");
const author=document.querySelectorAll('.author')
const quotes=[]
function myFun(){
    // https://type.fit/api/quotes
    fetch("https://type.fit/api/quotes")
    .then((res)=>{
        res.json().then(data=>{
            const rand=Math.floor(Math.random() * 1642)
            englishText.innerText=data[rand].text
            banglaText.innerText=data[rand].text
            author[0].innerText="-"+data[rand].author
            author[1].innerText="-"+data[rand].author
            myFun2(data[rand].text)

            
        })
    })
}
myFun()

const myFun2=async(msg)=>{
    const encodedParams = new URLSearchParams();
    encodedParams.append("q", msg);
    encodedParams.append("target", "bn");
    encodedParams.append("source", "en");
    
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'Accept-Encoding': 'application/gzip',
            'X-RapidAPI-Key': 'b555427a5fmsh420b94068cfe858p1ac427jsn68ecd23603c2',
            'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
        },
        body: encodedParams
    };
    
    fetch('https://google-translate1.p.rapidapi.com/language/translate/v2', options)
	.then(response => response.json())
	.then(response => {
        banglaText.innerText=response.data.translations[0].translatedText
        
    })
	.catch(err =>{
        if(err){
            
        }
    } );

}






// const encodedParams = new URLSearchParams();
// encodedParams.append("q", msg);
// encodedParams.append("target", "bn");
// encodedParams.append("source", "en");

// const options = {
// 	method: 'POST',
// 	headers: {
// 		'content-type': 'application/x-www-form-urlencoded',
// 		'Accept-Encoding': 'application/gzip',
// 		'X-RapidAPI-Key': 'f4ed7ea626msh87898269fa74339p1cae5bjsn4b0488f8a588',
// 		'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
// 	},
// 	body: encodedParams
// };

// fetch('https://google-translate1.p.rapidapi.com/language/translate/v2', options)
// 	.then(response => response.json())
// 	.then(response => {
//         banglaText.innerText=response.data.translations[0].translatedText
        
//     })
// 	.catch(err => console.error(err));
