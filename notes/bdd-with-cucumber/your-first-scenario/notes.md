# Notes

## Your first scenario

### Intro

Throughout this course, we're going to be working on a real application, following its development from the ground up, using BDD and Cucumber to guide us along the way.

In this chapter we're going to:

- Learn about Shouty, our example project
- Write out our first scenario in Gherkin
- Install Cucumber
- Use Cucumber to guide us implementing a very naive solution


### Choose the first scenario

Shouty is a social network that allows people who are physically close to communicate, just like people have always communicated with their voices. In the real world you can talk to someone in the same room, or across the street. Or even 100 m away from you in a park - if you shout.

```gherkin
Scenario: Listener is within range
  Given Lucy is located 15m from Sean
  When Sean shouts "free bagels at Sean's"
  Then Lucy hears Sean's message
```

#### Quiz #1
- Gherkin is just one way of expressing examples of how you want your system to behave. The advantage of using this particular format is that you can use Cucumber to test them for you, making them into **Living Documentation**.

- We've introduced four Gherkin keywords so far:
  - **Scenario** tells Cucumber we’re about to describe an example that it can execute.
  - **Given**, **When** and **Then** identify the steps of the scenario.

  There are a few other keywords which will be introduced later in the course.
-
  - **Given** is the *context* for the scenario. We’re putting the system into a specific state, ready for the scenario to unfold.
  - **When** is an *action*. Something that happens to the system that will cause something else to happen: an outcome.
  - **Then** is the *outcome*. It’s the behaviour we expect from the system when this action happens in this context.

- Behaviour-Driven Development practitioners definitely do care about business goals, but when we're writing the **Scenario** part of our Gherkin, we need to focus on the observable, testable behaviour of the system we're building.

  Later in the course we'll show you how you can use other parts of Gherkin documents to add other relevant details, like business goals, to make great executable specifications.


### Install Cucumber

Before we get started make sure you have a modern version of Ruby installed, and the Bundler gem. Open a command-prompt and check the Ruby version, and the version of Bundler, Ruby’s package manager:

```shell
$ ruby -v
$ bundle -v
```
If you see an error message when you run these commands, you’ll need to fix your Ruby installation.

Go back to the command prompt and create a new directory for our project:

```shell
$ mkdir shouty
```
Use `cd` to go into that directory. If you want to, you can open the directory up in your favourite text exitor at this point.

```shell
$ cd shouty
```
First we’ll create a Gemfile that describes the Ruby gems we need for our project. We’ll add Cucumber and RSpec-Expectations.

Gemfile
```ruby
source "https://rubygems.org"

gem "cucumber"
gem "rspec"
```
Now go back to the command-line and run `bundle install` to install those gems.
```shell
$ bundle install
```
Now we’re ready! If we run `cucumber` at this point , we’ll see it’s telling us to create a features directory.
```shell
$ bundle exec cucumber
No such file or directory - features. You can use `cucumber --init` to get started.
```
Good, we’ve installed Cucumber.

As instructed, we can use the cucumber --init command to create the conventional folder structure for our Gherkin specifications and the code that will let Cucumber test them:
```shell
$ cucumber --init
  create   features
  create   features/step_definitions
  create   features/support
  create   features/support/env.rb
```
Now we’re ready to create our first feature file.
```shell
$ bundle exec cucumber
0 scenarios
0 steps
0m0.000s
```

[Cucumber Docs](https://cucumber.io/docs/installation/)


### Add a scenario, wire it up

Let’s create our first feature file. Call the file `hear_shout.feature`
```shell
$ touch features/hear_shout.feature
```
All feature files start with the keyword `Feature:` followed by a name. It’s a good convention to give it a name that matches the file name.

Now let’s write out our first scenario.
```
hear_shout.feature
```
```gherkin
Feature: Hear shout
  Scenario: Listener is within range
    Given Lucy is located 15m from Sean
    When Sean shouts "free bagels at Sean's"
    Then Lucy hears Sean’s message
```
Save the file, switch back to the command-prompt and run `cucumber`.

You’ll see Cucumber has found our feature file and read it back to us. We can see a summary of the test results below the scenario: one scenario, three steps - all undefined.
```shell
$ bundle exec cucumber
Feature: Hear shout

  Scenario: Listener is within range         # features/hear_shout.feature:2
    Given Lucy is located 15m from Sean      # features/hear_shout.feature:3
    When Sean shouts "free bagels at Sean's" # features/hear_shout.feature:4
    Then Lucy hears Sean's message           # features/hear_shout.feature:5

1 scenario (1 undefined)
3 steps (3 undefined)
0m0.051s

You can implement step definitions for undefined steps with these snippets:

Given("Lucy is located {int}m from Sean") do |int|
  pending # Write code here that turns the phrase above into concrete actions
end

When("Sean shouts {string}") do |string|
  pending # Write code here that turns the phrase above into concrete actions
end

Then("Lucy hears Sean's message") do
  pending # Write code here that turns the phrase above into concrete actions
end
```
*Undefined* means Cucumber doesn’t know what to do for any of the three steps we wrote in our Gherkin scenario. It needs us to provide some *step definitions*.

Step definitions translate from the plain language you use in Gherkin into Ruby code.

When Cucumber runs a step, it looks for a step definition that matches the text in the Gherkin step. If it finds one, then it executes the code in the step definition.

If it doesn’t find one… well, you’ve just seen what happens. Cucumber helpfully prints out some code snippets that we can use as a basis for new step definitions.

Let’s copy those to create our first step definitions.

We’ll paste them into a Ruby file under the `step_definitions` directory, inside the features directory. We’ll just call it `steps.rb`.
```
steps.rb
```
```ruby
Given("Lucy is located {int}m from Sean") do |int|
  pending # Write code here that turns the phrase above into concrete actions
end

When("Sean shouts {string}") do |string|
  pending # Write code here that turns the phrase above into concrete actions
end

Then("Lucy hears Sean's message") do
  pending # Write code here that turns the phrase above into concrete actions
end
```
Now run Cucumber again.

This time the output is a little different. None of the steps are undefined anymore. We now have a pending step and two skipped ones. This means Cucumber found all our step definitions, and executed the first one. But that first step definition throws a PendingException, which causes Cucumber to stop, skip the rest of the steps, and mark the scenario as pending.
```shell
$ bundle exec cucumber
Feature: Hear shout

  Scenario: Listener is within range         # features/hear_shout.feature:2
    Given Lucy is located 15m from Sean      # features/step_definitions/steps.rb:1
      TODO (Cucumber::Pending)
      ./features/step_definitions/steps.rb:2:in `"Lucy is located {int}m from Sean"'
      features/hear_shout.feature:3:in `Given Lucy is located 15m from Sean'
    When Sean shouts "free bagels at Sean's" # features/step_definitions/steps.rb:5
    Then Lucy hears Sean's message           # features/step_definitions/steps.rb:9

1 scenario (1 pending)
3 steps (2 skipped, 1 pending)
0m0.008s
```
Now that we’ve wired up our step definitions to the Gherkin steps, it’s almost time to start working on our solution. First though, let’s tidy up the generated code.

We’ll rename the `int` parameter to something that better reflects its meaning. We’ll call it `distance`.

We can print it to the terminal to see what’s happening.
```ruby
Given("Lucy is located {int}m from Sean") do |distance|
  puts distance
  pending # Write code here that turns the phrase above into concrete actions
end

When("Sean shouts {string}") do |string|
  pending # Write code here that turns the phrase above into concrete actions
end

Then("Lucy hears Sean's message") do
  pending # Write code here that turns the phrase above into concrete actions
end
```
If we run `cucumber` again on our terminal, we can see the number 15 pop up in the output.
```shell
$ bundle exec cucumber
Feature: Hear shout

  Scenario: Listener is within range         # features/hear_shout.feature:2
    Given Lucy is located 15m from Sean      # features/step_definitions/steps.rb:1
      15
      TODO (Cucumber::Pending)
      ./features/step_definitions/steps.rb:3:in `"Lucy is located {int}m from Sean"'
      features/hear_shout.feature:3:in `Given Lucy is located 15m from Sean'
    When Sean shouts "free bagels at Sean's" # features/step_definitions/steps.rb:6
    Then Lucy hears Sean's message           # features/step_definitions/steps.rb:10

1 scenario (1 pending)
3 steps (2 skipped, 1 pending)
0m0.005s
```
Notice that the number 15 does not appear anywhere in our Ruby code. The value is automatically passed from the Gherkin step to the step definition. If you’re curious, that’s the `{int}` in the step definition pattern or *cucumber expression*. We’ll explain these patterns in detail in a future lesson.

#### Quiz #4

- Step definitions are Ruby blocks that actually do what's described in each step of a Gherkin scenario.

  When it tries to run each step of a scenario, Cucumber will search for a step definition that matches. If there's a matching step definition, it will execute the code in the block.

- Cucumber tells us that a step (and by inference the Scenario that contains it) is ***Pending*** when the automation code throws a **Pending** error.

This allows the development team to signal that automation for a step is a work in progress. This makes it possible to tell the difference between steps that are still being worked on and steps that are failing due to a defect in the system.

For example, when we run our tests in a Continuous Integration (CI) environment, we can choose to ignore pending scenarios.
