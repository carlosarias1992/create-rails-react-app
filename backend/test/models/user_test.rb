# frozen_string_literal: true

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  test 'password too short' do
    new_user = User.new(username: 'gage', password: 'test')
    assert_not new_user.save
  end

  test 'create user success' do
    new_user = User.new(username: 'gage', password: 'testing')
    assert new_user.save
  end

  test 'create user failure' do
    new_user = User.new
    assert_not new_user.save
  end

  test 'password digest is generated' do
    new_user = User.new(username: 'gage', password: 'testing')
    assert new_user.save
    assert User.last.password_digest
  end
end
