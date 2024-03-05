class ItemsController < ApplicationController
  def index
    @items = Item.all
  end

  private

  def item_params
    params.require(:item).permit(:name, :image, :description, :service_fee, :purchase_fee, :total_amount_payable, :duration, :user_id)
  end
end
