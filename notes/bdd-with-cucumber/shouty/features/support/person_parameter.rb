# frozen_string_literal: true

require "shouty"

ParameterType(
  name:        'person',
  regexp:      /Lucy|Sean/,
  transformer: -> (name) { Shouty::Person.new(name) }
)
