class City < ApplicationRecord
  has_and_belongs_to_many :items
  has_many :reservations
end
