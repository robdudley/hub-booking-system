class AddBookingDetailsIdToBooking < ActiveRecord::Migration[5.0]
  def change
    add_reference :bookings, :booking_details, index: true
  end
end
