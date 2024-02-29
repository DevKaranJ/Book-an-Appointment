# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

# Seed data for cities
City.create(city_name: "Delhi")
City.create(city_name: "Pune")
City.create(city_name: "Mumbai")
City.create(city_name: "Punjab")
City.create(city_name: "Bangalore")
City.create(city_name: "Chennai")
City.create(city_name: "Kolkata")
City.create(city_name: "Hyderabad")
City.create(city_name: "Ahmedabad")
City.create(city_name: "Jaipur")
City.create(city_name: "Lucknow")
City.create(city_name: "Kanpur")
City.create(city_name: "Nagpur")
