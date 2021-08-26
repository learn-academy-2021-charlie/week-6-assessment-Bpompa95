# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
#The first step is to create a controller method that will access all the items from the database.
class BlogPostsController < ApplicationController
  def index
    # ---2)
    #In the index method we are making an Active Record call that will save all the content from the database as an instance variable.
    @posts = BlogPost.all
  end

  def show
    # ---3)
    #Show is a RESTful route that looks for one item in the database.
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  #New is a RESTful route that displays a form for the user.


  def new
    @post = Post.new
  end

  def create
    # ---5)
    #Create is a RESTful route that submits user data to the database.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  # ---6)
  #controller method that will provide a form to edit a specific existing item in the db
  
  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    #updates the item in the db with data from the form, is passed the strong params method call
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8)
      #If the destroy method fails, it will redirect to the post the user was trying to delete
      redirect_to blog_post_path(@post)
    end
  end

  # ---9)
  # Private method, retricts the scope, anything below private can only be called inside the class
  private
  def blog_post_params
    # ---10)
    #Allows only the title and content columns to be created/updated
    params.require(:blog_post).permit(:title, :content)
  end
end
