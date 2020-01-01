# frozen_string_literal: true

# Creates initial users table for authentication purposes
class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.string :session_token

      t.timestamps
    end
  end
end
