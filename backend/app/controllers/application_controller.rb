# frozen_string_literal: true

require 'jwt'

class ApplicationController < ActionController::Base
  helper_method :current_user, :logged_in?

  def auth_header
    request.headers['Authorization']
  end

  def decoded_token
    return nil unless auth_header

    token = auth_header.split(' ')[1]
    begin
      JWT.decode(token, ENV['SECRET_KEY'], true, algorithm: 'HS256')
    rescue JWT::DecodeError
      nil
    end
  end

  def current_user
    decoded_hash = decoded_token
    if decoded_hash.nil?
      nil
    else
      user_id = decoded_hash[0]['user_id']
      @user = User.find_by(id: user_id)
    end
  end

  def encode_token(payload)
    JWT.encode(payload, ENV['SECRET_KEY'])
  end

  def get_token(user)
    payload = { user_id: user.id }
    encode_token(payload)
  end

  def logged_in?
    !current_user.nil?
  end
end
