# frozen_string_literal: true

class GreetingsController < ApplicationController
  def hello
    render json: { content: 'Hello from Rails' }
  end
end
