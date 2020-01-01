# frozen_string_literal: true

class User < ApplicationRecord
  validates :username, :session_token, :password_digest, presence: true
  validates :username, :session_token, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  attr_reader :password

  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user&.password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def password?(password)
    bcrypt_password = BCrypt::Password.new(password_digest)
    bcrypt_password.password?(password)
  end

  def reset_session_token
    self.session_token = User.generate_session_token
    save
    session_token
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  private

  def self.generate_session_token
    SecureRandom.urlsafe_base64
  end
end
