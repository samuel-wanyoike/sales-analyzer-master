
# Problem Statement
Sales analysis is done at regular intervals by sales managers of large organizations. Studying and analyzing past sales records, helps these sales managers to decide the products their teams need to focus upon and helps the sales managers to understand the likes and dislikes of their customers more effectively.​

​In this challenge, you need to read the data from a CSV(Comma Seperated Value) file  sales data of an e-commerce organization, which is available  in sales.csv file and write it on another file.

The file contains the following information:​

date - contains the date of the purchase​

customer_id - contains the customer_id of the customer who has purchased the product​

product_category - contains the category_id of the product being sold​

payment_method - this can have only two values, credit for credit card payment and paypal for payments made through PayPal​

value - contains the sales amount in USD​

time_on_site - contains the amount of time a customer has spent on an e-commerce site​

clicks_in_site - contains the number of clicks a user has made while accessing a site. This value is captured to see how many products a customer has visited before making a purchase decision.

# Tasks

Read the CSV file line by line that contains data of the sales record using Streams.​

Filter all the records where payment_method is 'credit'​

Write all the filtered data in the output.txt file using Streams.



 
 
