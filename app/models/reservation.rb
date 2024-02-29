class Reservation < ApplicationRecord
  belongs_to :city
  belongs_to :user
  belongs_to :item
end
