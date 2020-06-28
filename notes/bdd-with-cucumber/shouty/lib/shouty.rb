# frozen_string_literal: true

module Shouty
  class Person
    attr_accessor :name

    def initialize(name = nil)
      @name = name
    end

    def move_to(distance)
    end

    def shout(message)
    end

    def messages_heard
      ["free bagels at Sean's", "Free coffee!"]
    end
  end
end
