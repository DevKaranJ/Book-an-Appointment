class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :confirmable, :rememberable, :validatable
  has_many :items, dependent: :destroy
  has_many :reservations, dependent: :destroy

  validates :email, presence: true, uniqueness: true
  # format: { with: URI::MailTo::EMAIL_REGEXP }
end
