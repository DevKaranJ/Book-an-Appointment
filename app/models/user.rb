class User < ApplicationRecord
  has_many :items, dependent: :destroy
  has_many :reservations, dependent: :destroy

  validates :username, presence: true, uniqueness: true
  # format: { with: URI::MailTo::EMAIL_REGEXP }
end
