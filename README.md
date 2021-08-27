# wunderkind-assessment
Assessment for Wunderkind 

# Challenge 1

Once I had launched the html on the first challenge, the first objective was to identify each of the sections that the html belonged to as well as their unique set of classes; this was to try to understand how the developer was thinking when they were coding the content on the page for me to style.

The first thing I always do before I begin to implement any styling is to find what exactly needs to change first. 

So, I first started with the text, changing it blue, making the subheadline smaller than the headline. Then, I made my way to the input tag in group 2 to style the form exactly like it was in the picture. Next, I took screenshots of the lufthansa logo (the only html I further implemented because I thought giving the logo its own div would be better to manipulate) and the lock icon. For the lock icon, I created a before style where it was used as content and rotated it to give it that shaded corner. 

# Challenge 2

The first thing I learned how to do in Chrome Dev Tools was check with the console to identify all the classes I needed to be sure to pull the right elements for the overlay. 

Grabbed the Product Name using the document.getElementsbyClassName() method from the class, "product-title." Identified the color swap button from "color-swatch," and decided to grab the main price that was not crossed out from the "pdpprice-row2-main-text".

After I collected all the elements I needed, I decided to use a for loop to give all the color buttons the click event listener. 
For the overlay function itself, I decided to use a lot of DOM Manipulation where I created the overlay as a div. I calculated the 15% discounted price using ParseFloat() to change it from a string to a number, multiplying it by .85, and then used the toFixed() method to bring it to only 2 decimals. 

With all the variables ready, I created the message using interpolation and then appending it to the div.

Once that was complete, I decided to include the creation of the close button and shopping cart button all within the same function. Created both elements and styled them through .style method and then gave the close button the event listener for the anonymous function to hide the overlay. To ensure that it could be brought back again, I inserted the prior for loop into the anonymous function to add the overlay event listener back to the color buttons. 

Once the buttons were complete, I appended them to the div and then attached the div to the body of the HTML document.

Looking back at the way the function was written, I would probably define the creation of each element in the overlay as its own separate function so the overall overlay function wouldn't have so much code to sift through and that helper functions could move the process more swiftly. 
