# TRINIT_SRM_DEV01
Drag and drop elements to create a website

**TEAM NAME:** SRM <br />
**PROBLEM STATEMENT:** DEV_01 <br />
**TECH STACKS USED:** html, CSS+Bootstrap, vanilla Javascript <br />


**VIDEO LINK:** https://drive.google.com/file/d/1YrBRMeSnEDHQ9f-8MGNwW_BOm0quqiP_/view <br />
**PROJECT LINK:** https://github.com/manavagr1108/TRINIT_SRM_DEV01 <br />
**Github Pages LINK:** https://manavagr1108.github.io/TRINIT_SRM_DEV01/ <br />


**INTRODUCTION:** <br />
Develop a solution through which a person can create a website just by dragging and dropping elements. <br />
 
**PROPOSED METHOD:** <br />
-build a basic website using our web app <br />
-components include navbar, footer, cards, images and other basic html elements. <br />
-**FUNCTIONALITY:** <br />
    • User can choose from a number of components which he can drag around the screen and place them according to their requirements.<br />
    • Single Click displays the CSS style of the chosen element.<br />
    • Double Clicking on an element removes it.<br />
    • Hovering on certain elements like buttons, cards will trigger hover and click animations.<br />
    • Blue highlight border displays the element that the cursor currently points to.<br />
-**METHOD:**<br />
    • Generation of new elements is done by appending children in the userbody div.<br />
    • Dragging and dropping of elements is implemented using dragElements function, which basically gets the cursor position and as <br />the mouse is dragged it reassigns the top and left attributes of the element.<br />
    • To generate advanced components like navbar, card, footer: we have used bootstrap classes and appended them in the same way as <br />other basic HTML elements.<br />
**WORK DONE:**<br />
![image](./Assets/1.png)<br />
![image](./Assets/2.png)<br />



**CONCLUSION:**<br />
Our site can be used by a novice web developer to build his own website by dragging and dropping elements to the main screen, styling<br /> them according to his requirements and also generating corresponding CSS.<br />
 
**REFERENCES:**<br />
https://www.w3schools.com/js/default.asp<br />
https://startbootstrap.com/themes<br />
https://stackoverflow.com/questions/6860853/generate-random-string-for-div-id/6860962<br />