# frozen_string_literal: true
require "shouty"

Given("Lucy is located/stands {int}( )metre(s)/m from Sean") do |distance|
  @lucy = Shouty::Person.new
  @sean = Shouty::Person.new
  @lucy.move_to(distance)
end

When("Sean shouts {string}") do |message|
  @sean.shout(message)
  @message_from_sean = message
end

Then("Lucy hears Sean's message") do
  expect(@lucy.messages_heard).to include @message_from_sean
end
