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
    end 
end
