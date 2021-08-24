# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating an API with a model called Animal that has_many Sightings, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

  Your answer: Fix generator migration, add a cloumn to the sightings model called animal_id, data type integer run the migration.

  Researched answer:We generate a migration which is: rails g migration add_animal_id_to_sightings
  In the migration file add_column :sightings, :animal_id, :integer ,it add an animal_id with the integer type to the sightings model. We can run the command rails db:migrate.



2. Which RESTful API routes must always be passed params? Why?

  Your answer: for RESTful API routes you need to use update, destroy and show because it will show some of the changes in the table.

  Researched answer:  show: show one instance of a resource
  new: typically used to render a form to create a resource
  edit: used to render a form to edit an existing resource
  update: update an existing resource
  delete: delete the resource



3. Name three rails generator commands. What is created by each?

  Your answer: controller: The rails controller is the logical center of your application. it coordinates the interaction between the user, the views and the model.
  model: Model creates a migration, model , and tests for the files that were generated.
  resoucre: creates a controller, empty views folder, and resource routes.

  Researched answer:  rails g rspec: RSpec is a testing tool for Ruby , rails g migration: add column to existing model, rails g routes:  will list all of your defined routes, which is useful for tracking down routing problems in your app, rails g scaffold: working app






4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

method="GET"    /students   students#index  display a list of all students 

method="POST"   /students   students#create  create a new  student    

method="GET"    /students/new students#new  return an HTML form for creating a new student 

method="GET"    /students/2  students/2#show  display student 2

method="GET"    /students/edit/2  students/2#edit return an HTML form for editing student 2

method="PATCH"  /students/2   students/2#update update student 2

method="DELETE" /students/2  students/2#destroy  delete student 2



5. As a developer, you want to make an application that will help you manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).
  As a user, I see a Header that says create List
  As a user, I can create a new List
  As a user, when I create a new List, its create a new table
  As a developer, I can take the users input
  As a user, I can go in the table and make changes
  As a user, I can add, edit, and delete the list
  As a developer, the users changes are shown in the table 
  As a user, when I edit and update, it takes me back to home page
  As a developer, I create a button that takes the user to the main page
  As a user, I can see a List of what I've completed 