/*
* Excercise 1
*
*/



/*
* Then write a function that changes the text and the color inside the div
*
*/

const color_block = document.getElementById('color-block');
const color_name = document.getElementById('color-name');
color_block.addEventListener('click', ()=> { 
    changeColor();
});

function changeColor(){
    //Write a condition determine what color it should be changed to
    if(color_name.textContent === "#F08080"){
        color_block.style.backgroundColor = "#ACD8FB";
        document.getElementById('color-name').textContent = "#ACD8FB";
        //change the background color using JS

        //Change the text of the color using the span id color-name

    }
    else{
        color_block.style.backgroundColor = "#F08080";
        document.getElementById('color-name').textContent = "#F08080";
        //change the background color using JS

        //Change the text of the color using the span id color-name


    }
}


/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/
const convertbtn = document.getElementById('convertbtn');
convertbtn.addEventListener('click', ()=> { 
    convertTemp();
});

/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/

function convertTemp(){
    //Calculate the temperature here
    //Send the calculated temperature to HTML
    let fahrenheit = document.getElementById('f-input').value;
    let celsius = (fahrenheit - 32) * 5/9
    document.getElementById('c-output').textContent = celsius;
    

}


