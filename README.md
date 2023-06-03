# Urlshortner
Primary Goal: To achieve a Webapplication whose work is to short a given long url and also make custom short url from the given url so that they can be easily managed by user.

Solution: We have taken refernece of bitly.com who also done the same work like converting the long url into the short one and also providing the service like making custom short url.

At first we have made the UI whose main aim to take the long url from the user.

![Screenshot (6)](https://user-images.githubusercontent.com/87935713/211787682-c68af169-9cba-4ad1-b3b0-99b925904076.png)

![Screenshot (7)](https://user-images.githubusercontent.com/87935713/211787756-84b4eab0-7343-4bb7-a110-56878aca16d6.png)

This is the UI which takes url from the user.

Then after getting the url from the user, we pass that url from html to python.

In Python we use flask framework which mainly used for building microservice webapplication.

With the help of flask we get that url in our backend. After getting the url we use python logic to get a string of random 6 characters which are mainly used for converting the url with the help of rarndom module in python.

After making of this string we save this string into our database for future so that we not allot same string for more than one user.

When the saving of string to database completed then we send this shorten url to the UI for the user. 

When user click on this link then in flask automatically dynamicUrl function will run whose working is to redirect this short url to the long url given by the user.
So mainly this function is connecting our short url with long url.


![Screenshot (8)](https://user-images.githubusercontent.com/87935713/211787893-b6211a13-823f-4d5b-b0ea-d37b84499a5a.png)

![Screenshot (9)](https://user-images.githubusercontent.com/87935713/211787957-43186e46-014c-4892-a8d5-62bcc29de538.png)


In this web applicaction login and sign up facility can also be used by user.
When a user login to our site then after login he or she can access the table of all the url which were shorted by him.

![Screenshot (10)](https://user-images.githubusercontent.com/87935713/211788032-60586ec5-668b-4103-ab9f-79c218f81d40.png)

![Screenshot (11)](https://user-images.githubusercontent.com/87935713/211788051-aa92290f-77ff-44a9-9435-887d533108cb.png)


User can also edit the urls and delete the urls according to its need.

So at the end we have completed an end to end webapllication whose main aim is to convert a long url to short url.
