
# Sneakerz

![Splash_Page](https://user-images.githubusercontent.com/9407189/119377471-04ef0900-bc72-11eb-84b2-38f5351e8828.jpg)

[Sneakerz](https://sneakerz-app.herokuapp.com/#/) is a GoatApp clone where you can:

1. Create an account
2. Search for different products
3. Simulates buying a shoe in a given size
4. Add and remove items from a cart
5. Cart persists even after checking out.

# Sneakerz was built using

1. React
2. Redux for state management
3. Ruby on Rails 
4. Postgres DB
5. S3 for file storage


# A Better Search Method

When creating my search component, I knew that a temporary and inefficient solution was to make an API request to my Rails backend and to store every shoe in the Redux store. In this case and having 50+ shoes, it wasn't a bad idea. However, I knew it wouldn't scale so my solution was to use Lodash's debounce function and use the Rails "ILIKE" search condition. First, through debounce, I was able to efficiently make API calls, after all, I wasn't making API calls after every key press. Second, through the "ILIKE" search condition, I could pass partial strings like "Nke" or "Adi" instead of "Nike" or "Adidas" and my DB would return 5 items that had "Nike" or "Adidas" in their name. 


# Things to work on

1.) Lazy Load components </br>  
2.) Lazy Load images
