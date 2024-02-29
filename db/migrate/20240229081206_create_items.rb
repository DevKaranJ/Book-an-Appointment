class CreateItems < ActiveRecord::Migration[7.1]
  def change
    create_table :items do |t|
        t.string :name, null: false
        t.string :image
        t.text :description
        t.decimal :finance_fee, precision: 10, scale: 2
        t.decimal :purchase_fee, precision: 10, scale: 2
        t.decimal :total_amount_payable, precision: 10, scale: 2
        t.integer :duration
        t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end

