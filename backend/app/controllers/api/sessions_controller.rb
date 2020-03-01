# frozen_string_literal: true

module Api
  class SessionsController < ApplicationController
    def create
      @user = User.find_by_credentials(session_params[:username], session_params[:password])

      if @user && !logged_in?
        login!
        render :show
      elsif logged_in?
        render json: { errors: ['Already logged in'] }, status: 422
      else
        render json: { errors: ['Invalid username/password'] }, status: 422
      end
    end

    def login_status
      if logged_in?
        render json: { username: @current_user.username, id: @current_user.id, ok: true }
      else
        render json: { ok: false }
      end
    end

    def destroy
      if logged_in?
        logout!
        render json: {}, status: 200
      else
        render json: { errors: ['Not logged in'] }, status: 404
      end
    end

    private

    def session_params
      params.require(:user).permit(:username, :password)
    end
  end
end
