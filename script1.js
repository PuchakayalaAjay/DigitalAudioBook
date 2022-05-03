let voice =document.getElementById("voice") // getting element in html using document
let button = document.getElementById("button")
// below statement is for creatig object for webkitseechRecognition
/* declare global variable SpeechRecognition for the window .this contain in browser
webkitSpeechRecogiton and SpeechRecognition are present in window */
SpeechRecognition = window.SpeechRecognition|| window.webkitSpeechRecognition;
//console.log("hiii");
recognition= new SpeechRecognition();
/* onstart is a event handler can be used to inform the user that speech recognition 
has started and thy can speak in microphone */
recognition.onstart =function(){
    alert("you can talk"); // alert statement
}
/*recognition.onspeechend = function(){
    recognition.stop();
}*/
// once user is done speaking the onresult event handler will have the result
recognition.onresult = function(event){
    console.log(event.results[0][0].transcript); // printing the speeking words in consol
    //var transcrit =event.result[0][0].transcrit;
    let a =event.results[0][0].transcript; // assign result of speech to variable 
    voice.textContent=a; //insert the text to textarea tag to display to the user

}
/*when button click the user this function activate in below method click is a event*/

button.addEventListener('click',function(){

recognition.start(); //this statement is used to start recognition voice of user
})
