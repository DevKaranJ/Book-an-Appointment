class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable

         validates :username, presence: true, uniqueness: true
         validates :password, presence: true
  has_many :items
  has_many :reservations
end
