# frozen_string_literal: true

module Api
  class UsersController < ApplicationController
    def index
      @users = User.all
      render :index
    end

    def update
      @user = User.find_by(id: params[:id])

      if @user.update(user_params)
        render :show
      else
        render json: { errors: @user.errors.full_messages }, status: 422
      end
    end

    def show
      @user = User.find_by(id: params[:id])

      if @user
        render :show
      else
        render json: { errors: ['User does not exist'] }
      end
    end

    def create
      @user = User.new(user_params)

      if !logged_in? && @user.save
        login!
        render :show
      elsif logged_in?
        render json: { errors: ['Already logged in'] }, status: 422
      else
        render json: { errors: @user.errors.full_messages }, status: 422
      end
    end

    private

    def user_params
      params.require(:user).permit(:username, :password)
    end
  end
end
