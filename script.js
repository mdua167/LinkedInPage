let clicked = false; //checks if like button is pressed
let count = 0; //tracks the number of posts for button and card 
let commentCount = 0; 
  
function clickPost()
{
  count++; 
  //main card that holds other elements 
  var post = document.createElement("div");
  post.classList.add("postT");
  post.setAttribute("id", count.toString());
  //section for contact img and info 
  var con = document.createElement("div"); 
  con.classList.add("contact");
  //contact image 
  var contactImage = document.createElement("img");
  contactImage.src = "images/sahil.jpg";
  contactImage.classList.add("contact_img");
  

  var description = document.createElement("div"); 
  description.classList.add("description"); 

  //for info with img 
  var contact = document.createElement("h4"); 
  var name1 = document.createElement("span"); 
  var name2 = document.createElement("span"); 

  name1.classList.add("blackTag"); 
  name2.classList.add("greyTag"); 

  name1.innerHTML = "Sahil Khurana"; 
  name2.innerHTML = ". 3rd+"; 

  var time = document.createElement("h5"); 
  var day = document.createElement("span"); 
  day.innerHTML = "1d."; 
  day.style.color = "grey"; 

  //appending all span to h4 and h5 
  contact.appendChild(name1); 
  contact.appendChild(name2); 
  time.appendChild(day);


  var info = document.createElement("h5"); 
  info.innerHTML = "Software Engineering Manager at Karma Circles";
  info.style.color = "grey"; 

  var text = document.createElement("div"); 
  var content = document.createElement("p"); 
  var comment = document.createElement("h2"); 
  var postVal = document.getElementById('post_text').value;
  //value inside the post 

  comment.classList.add("comment");
  comment.innerHTML = "13-3 comments"; 
 
  content.classList.add("content");
  content.innerHTML = postVal; 
  
  var like_comment = document.createElement("div"); 
  var like_btn = document.createElement("button");
  var comment_btn = document.createElement("button"); 
  
  like_btn.style.border = "none";
  comment_btn.style.border = "none"; 

  var likeL = document.createElement("h5"); //Like Label 
  likeL.innerHTML = "Like"; 
  likeL.classList.add("like"); 
  likeL.setAttribute("id", "likeB"); 

  var like_icon = document.createElement("img"); //like icon 
  like_icon.src = "images/like_button2.png"; 
  like_icon.classList.add("like_img");
  like_icon.setAttribute("id", "likeI"); 

  var commentL = document.createElement("h5"); //Like Label 
  commentL.innerHTML = "Comment"; 

  var comment_icon = document.createElement("img"); //like icon 
  comment_icon.src = "images/comment.png"; 
  comment_icon.classList.add("like_img");

  like_comment.classList.add("like_comment"); 
  like_btn.classList.add("like_btn"); 
  comment_btn.classList.add("comment_btn");
  comment_btn.setAttribute("id", count.toString()); 

  like_btn.appendChild(like_icon);
  like_btn.appendChild(likeL); 
  comment_btn.appendChild(comment_icon); 
  comment_btn.appendChild(commentL);

  like_comment.appendChild(like_btn); 
  like_comment.appendChild(comment_btn);

  text.appendChild(content); 
  text.appendChild(comment); 

  description.appendChild(contact); 
  description.appendChild(info);
  description.appendChild(time); 

  //appending the image and description to con
  con.appendChild(contactImage); 
  con.appendChild(description);
  
  //adding con to main post div 
  post.appendChild(con);
  post.appendChild(text);
  post.appendChild(like_comment);

  document.getElementById('post_text').value = " ";

  //post is added to blank div in html file 
  document.getElementById('post-card').prepend(post);
 
  like_btn.addEventListener("click", tapLike); 

  like_comment.addEventListener("click", showComments, false); 
  // post.addEvent.Listener("click", showComments, false); 
  // comment_btn.addEventListener("click", showComments); 
}


//Changes color of like button when user taps and goes back to white when user taps on button again
function tapLike()
{
  console.log("i am coming here");
  if(!clicked)
  {
    clicked = true; 
    document.getElementById('likeB').style.color = '#0a66c2';
    document.getElementById('likeI').style.color = '#0a66c2';
  }
  else
  {
    clicked = false; 
    document.getElementById('likeB').style.color = 'grey';
    document.getElementById('likeI').style.color = 'grey';
  }
}
//shows comments when user taps on comment button
 /*if(count == 1) ensures that another div is not created if the user taps on comment more than once  
  {*/
function showComments(e)
{
  if(e.target !== e.currentTarget)
  {
    var clickedItem = e.target.id; 
    // var s = document.createElement("div"); 
    // s.classList.add("comment_page"); 
    // alert(clickedItem);

    
  
    var main_c = document.createElement("div"); 
    main_c.classList.add("comment_page");
    main_c.setAttribute("id", count.toString()); 

    // document.getElementById(clickedItem).style.borderBottomRightRadius = "0px";
    // document.getElementById(clickedItem).style.borderBottomLeftRadius = "0px";
    
    //making image div and adding image to it 
    var img_c = document.createElement("div"); 
    img_c.classList.add("imgClass"); 
    var contactImage = document.createElement("img");
    contactImage.src = "images/sahil.jpg";
    contactImage.classList.add("comment_img");
    img_c.appendChild(contactImage); 

    //making comment div and adding a form with input to it 
    var commentInput = document.createElement("div"); 
    commentInput.classList.add("input_trial");

    var form = document.createElement("form");
    var input = document.createElement("input"); 
    
    input.setAttribute("type", "text"); 
    // input.setAttribute("id", "post_comment"); 
    input.setAttribute("placeholder", "Add a comment..."); 
    input.setAttribute("id", "comment");

    form.appendChild(input); 
    commentInput.appendChild(form); 

    var postB = document.createElement("button"); 
    postB.setAttribute("value", "hi"); 
    postB.classList.add("post-b"); 
    // postB.style.display = "none"; 
  /*
  <div class="post-b">
          <input type = "button" value = "Post" id = "post_btn" onClick = "clickPost();"> </input> 
        </div>

  */
  
  // input.addEventListener("keyup", function(event) {
  //   if (event.keyCode === 13) {
  //       alert('Enter is pressed!');
  //   }
  //   });
    
   
    var postB = document.createElement("button");
   
    
    // postB.addEventListener("click", postComment); 

    var likeL = document.createElement("h5"); //Like Label 
    likeL.innerHTML = "Post"; 
    likeL.classList.add("like"); 
    likeL.setAttribute("id", count.toString()); 

    postB.appendChild(likeL);
    postB.classList.add("post_comment");
    postB.setAttribute("id", count.toString()); 
    
    //code trial to hide the comment 
  //   if(count % 2 == 0)
  //  {
  //    console.log("should change");
  //    document.getElementById("test").style.display = "none"; 
  //  }
  //  else
  //  {
  //    document.getElementById("test").style.display = "block"; //have to make sure that when I show it again, it shows up only once 
  //  } 
    main_c.append(img_c); 
    main_c.append(commentInput);
    main_c.append(postB);

    console.log("coming till here also");
    // var d = document.createElement("div");
    
    // d.appendChild(main_c);
    
    document.getElementById(clickedItem).append(main_c);   
    main_c.addEventListener("click", postComment, false); 
    // postB.addEventListener("click", postComment, false);  //postB
  }
  
}
function postComment(e)
{
  if(e.target !== e.currentTarget)
  {
    var clickedItem = e.target.id; 
    // var s = document.createElement("div"); 
    // s.classList.add("comment_page"); 
    // alert(clickedItem); 
  }
  var comment_box = document.createElement("div");
  comment_box.classList.add("comment_b"); 

  var grey_box = document.createElement("div"); 
  grey_box.classList.add("c_box"); 
  var contactImage = document.createElement("img");
  contactImage.src = "images/sahil.jpg";
  contactImage.classList.add("commentbox_img");

 
   var name = document.createElement("h4"); 
   name.innerHTML = "Sahil Khurana"; 
   name.style.fontWeight = "12px";
   var description = document.createElement("h5"); 
   description.innerHTML = "Software Engineering Manager at Karma Circles"; 
   description.classList.add("greyTag");
  
  var userComment = document.getElementById("comment").value;
  var comment = document.createElement("h5"); 
  comment.innerHTML = userComment; 
  
   grey_box.appendChild(name); 
   grey_box.appendChild(description);
   grey_box.appendChild(comment);
  
  
   comment_box.append(contactImage); 
   comment_box.append(grey_box);
 

  // document.getElementById("c_page").append(comment_box);
  document.getElementById(clickedItem).append(comment_box);
 // document.getElementById("c_page").append(comment_box);
  
  document.getElementById("comment").value = " ";
 

  
//   var box = document.createElement("div"); 
//   box.classList.add("c_box"); 

// comment_box.appendChild(contactImage); 
// comment_box.appendChild(box); 

// document.getElementById("test").append(comment_box);   
  
}