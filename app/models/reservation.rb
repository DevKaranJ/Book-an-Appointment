class Reservation < ApplicationRecord
  belongs_to :user
  belongs_to :city
  belongs_to :item

  validates :date, presence: true
end
