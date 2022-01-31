
let clicked = false; //checks if like button is pressed
const DivContainer = document.getElementById("div-container");
var postText = "";
function clickPost()
{
    var postVal = document.getElementById('post_text').value;
    console.log(postVal);
    
    // button.addEventListener('click', tapLike);

    var element1 = document.createElement("div");
    var element2 = document.createElement("div"); 
    var element3 = document.createElement("div");
    var element4 = document.createElement("div");
    
    var content = document.getElementById('c'); //contact class 
    var content2 = document.getElementById('p'); //posts class
    var content3 = document.getElementById('lc');
    
    
    // element2.textContent = postVal; 
    element1.classList.add("postBod"); 
    
    // element2.classList.add("description");
    // postText = document.getElementById('post_content');
    // postText.textContent = postVal; 
    // element2.innerHtml = 
    // element2.classList.add('contact');
    element2.appendChild(content.cloneNode(true));
    element3.appendChild(content2.cloneNode(true));
    element4.appendChild(content3.cloneNode(true));
    document.getElementById("like_btn").addEventListener("click", tapLike);

   postText = document.getElementById('post_content');
   postText.textContent = postVal; 
    
            // down.innerHTML = "Inner DIV is copied"
            //             + " to another element.";


    // element2.classList.add("description");

    // // const content = element2.innerHTML;
    // element2.textContent = element2.innerText;

    // element1.innerHTML = element2.textContent;
    // element1.appendChild(element2); 

    // element2.classList.add("contact");
    // element1.appendChild
    // (
    //   document.getElementById('postBod')
    // );
    // element1.classList.add("postBod");
    // element1.appendChild
    // (document.getElementById('c'));
   
    // var element2 = document.createElement("div"); 
    // element2.classList.add("contact");
    
    // element1.appendChild(element2);
    
    // var post = document.getElementById("pAdd");

    // element.appendChild(post);
    // element1.appendChild(element2);

    element3.append(element4);
    element2.append(element3);
    element1.append(element2);
    
    document.getElementById('test').appendChild(element1);

    document.getElementById('post_text').value = " "; //setting value in start a post text to blank 
}


//Changes color of like button when user taps and goes back to white when user taps on button again
let likeIcon = document.getElementById('thumbUp');
let likeWord = document.getElementById('like');

function tapLike()
{
  if(!clicked)
  {
    clicked = true; 
    document.getElementById('like').style.color = '#0a66c2';
    document.getElementById('thumbUp').style.color = '#0a66c2';
  }
  else
  {
    clicked = false; 
    document.getElementById('like').style.color = 'grey';
    document.getElementById('thumbUp').style.color = 'grey';
  }
}