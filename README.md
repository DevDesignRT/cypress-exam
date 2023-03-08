# cypress-exam

Cypress Course exam exersize

1. Write tests for the application https://juice-shop-sanitaryskyi.herokuapp.com/
   1.1. Compile the minimum required set of tests for registration and automate it.
   1.2. Compile the minimum necessary set of tests for authorization and automate it.
   1.3. Compile the minimum required set of tests for placing an order and automate it. 1.4. Write a helper function for product search on the main page. Write a product order test using this helper.
   1.5. Automate test for feedback form http://juice-shop-sanitaryskyi.herokuapp.com/#/contact
   This item is estimated as 60% of the total amount of work
2. Deploy the server locally and automate API tests.
   Environment settings:

Before proceeding with the task, you need to install and configure the following tools and carefully review the json-server documentation.
For requests, we will use a JSON server with authentication.
To install the JSON server, use the following command:
npm install json-server-auth
Start the JSON server with the following command:
json-server-auth http://jsonplaceholder.typicode.com/db The JSON server should now be running at http://localhost:3000.

This point is estimated as 40% of the total amount of work

# Task Endpoint Expected response status code

1. Get all posts. Verify HTTP response status code and content type. /posts 200
2. Get only first 10 posts. Verify HTTP response status code. Verify that only first posts are returned. /posts 200
3. Get posts with id = 55 and id = 60. Verify HTTP response status code. Verify id values of returned records. /posts 200
4. Create a post. Verify HTTP response status code. /664/pos ts 401
5. Create post with adding access token in header. Verify HTTP response status code. Verify post is created. /664/pos ts 201
6. Create post entity and verify that the entity is created. Verify HTTP response status code. Use JSON in body. /posts 201
7. Update non-existing entity. Verify HTTP response status code. /posts 404
8. Create post entity and update the created entity. Verify HTTP response status code and verify that the entity is updated. /posts 200
9. Delete non-existing post entity. Verify HTTP response status code. /posts 404
10. Create post entity, update the created entity, and delete the entity. Verify HTTP response status code and verify that the entity is deleted. /posts 200

Reminder:
● There should be a separate repository for both tasks.
● Follow git flow.
● All actions in tests must be divided into logical blocks and have a log for cypress runner.
● Each non-existent entity identifier requested must be randomly generated
way
● All data sent in POST requests or written to fields on the UI must be
randomly generated.
● Maintain high code quality (optimize code, avoid code duplication, in visual tests
apply Page Object pattern, structure files and add indentation, don't leave unused imports)
