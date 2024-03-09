class AddConfirmationFieldsToUsers < ActiveRecord::Migration[7.1]
  def change
    add_column :users, :confirmation_token, :string
    add_index :users, :confirmation_token
    add_column :users, :confirmation_sent_at, :datetime
  end
end
