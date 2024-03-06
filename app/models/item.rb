class Item < ApplicationRecord
  belongs_to :user

  validates :name, presence: true
  validates :description, presence: true
  validates :service_fee, presence: true, numericality: { greater_than_or_equal_to: 0 }
  validates :purchase_fee, presence: true, numericality: { greater_than_or_equal_to: 0 }
  validates :total_amount_payable, presence: true, numericality: { greater_than_or_equal_to: 0 }
  validates :duration, presence: true, numericality: { only_integer: true, greater_than: 0 }
end
