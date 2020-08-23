class UsersController < ApplicationController

    def show 
        user = User.find_by(id: params["id"])
        render json: user
    end 

    def login
        user = User.find_by(email: params["email"])

        if !!user
            render json: user
        else 
            render json: {error: "User Not Found"}
        end 
    end 
    
    def create
        user = User.new
        array = params["info"].split("-----")
        user.email = array[0]
        user.display_name = array[1]

        if user.save 
            render json: user 
        else 
            render json: {error: "could not save"}
        end 
    end 
end
