# # This file should ensure the existence of records required to run the application in every environment (production,
# # development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# # The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
# #
# # Example:
# #
# #   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
# #     MovieGenre.find_or_create_by!(name: genre_name)
# #   end

require 'faker'

# Seed data
User.destroy_all
Item.destroy_all
Reservation.destroy_all
City.destroy_all

# Create some cities
5.times do
  City.create(city_name: Faker::Address.city)
end

# Create a user with specific login credentials
user = User.create(username: 'example@example.com', email: 'example@example.com', password: 'password123', password_confirmation: 'password123')
user.confirm # Confirm the user

# Select the first user
selected_user = User.first

# Create items associated with the selected user
6.times do
  item = selected_user.items.create(
    name: Faker::Commerce.product_name,
    image: Faker::LoremFlickr.image(size: "300x200"),
    description: Faker::Lorem.paragraph(sentence_count: 3),
    service_fee: Faker::Commerce.price,
    purchase_fee: Faker::Commerce.price,
    total_amount_payable: Faker::Commerce.price,
    duration: Faker::Number.within(range: 1..30)
  )

  # Get a random city or create one if none exist
  city = City.first || City.create(city_name: Faker::Address.city)

  # Create a reservation for the item
  reservation = Reservation.create(
    date: Faker::Date.between(from: Date.today, to: 1.year.from_now),
    user_id: selected_user.id,
    item_id: item.id,
    city_id: city.id
  )
end





  
  