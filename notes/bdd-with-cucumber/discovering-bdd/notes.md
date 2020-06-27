# Notes

## BDD - Behavioral Driven Development

Brining Business People and Software People closer by building shared understanding of the desired behaviour of the system.

Doing BDD is doing 3 things in a close loop:
1. **Discovery:** Explore, Discover, Agree how system should behave using concrete examples.
2. **Formulation:** Document those examples in a way that it could be automated and check for agreement.
3. **Automation:** Get coding - implement the behaviour described by each documented example starting with the automated test to guide the development of the code.

The idea is to make each change small and iterate rapidly moving back up a level each time you need more information.

Every time you automate and implement a new example you've added something valuable to your system and you're ready to respond to feedback.

Over time, the documented examples become an asset that enables your team to continue confidently and rapidly making changes to the system -> *Living Documentation*
  - The code reflects the documentation and the documentation reflects the team's shared understanding of the what code does.
  - This shared understanding and the living documentation is constantly evolving.


### Quiz #1
- BDD is an approach that collaboratively specifies the system's desired behaviour. Each time a piece of behaviour is agreed, we use that specification to "drive" the development of the code that will implement that behaviour.
- We start by collaboratively ***discovering*** the scope of the behaviour required by the story. Once we have agreed on that behaviour, we ***formulate*** the specification in business-readable language. Finally, we ***automate*** the formulated specification to verify that the system actually behaves as expected.
- Cucumber is a tool that understands your documentation and turns it into automated tests. BDD is a collaborative approach, made up of three practices. BDD practitioners may use Cucumber to automate their documentation.
- **"Living documentation"** automatically tells us when the system and the documentation are out of sync. This may be for one of several reasons:
  - the behaviour specified has not yet been implemented
  - the implementation contains a defect
  - the documentation is out of date


## BDD and Agile

To start BDD you need to have you work already broken down into User Stories. Ideally, you'll also started to define acceptance criteria or business rules for those stories.

### Quiz #2
- BDD is a collaborative activity. Living documentation is a secondary, valuable, output of applying BDD practices.
- BDD is a collection of practices that build upon agile ways of working, helping teams succeed. For these practices to deliver value, you'll need to be working in an agile way.
- User stories were created to be "placeholders for a conversation." They allow us to defer detailed analysis until we're confident that the behaviour they describe actually needs to be developed.


## Discovery workshop

1. Define a user story (placeholder).
```markdown
## Process Refunds

In order to satisfy a customers' statutory rights
As a sales assistant
I need to be able to process refunds.
```
2. Run "three amigos meeting".
It involves 3 different disciplines from the team.
  - tester - test
  - developer - development
  - P.O. - product

### Quiz #3
- The goal of a three amigos meeting is to ensure that the team fully understand the scope of the story being discussed. For this to be effective, we need to have at least three different perspectives represented at the meeting.

  More than three people might attend a three amigos meeting, because:
  - some stories are broad enough to require the input of more than three perspectives
  - more than one representative of each perspective may attend

- The essential three perspectives required are:
  - customer / business perspective - usually provided by the Product Owner
  - development perspective - usually provided by a Developer
  - test perspective - usually provided by a Tester

- The whole purpose of the three amigos meeting is to discover things about the story that weren't previously obvious. We should expect to learn new things during a three amigos meeting.


## Discovery summary
It's a really good way to discover assumptions and potential misunderstandings. It is also a great way to communicate requirements that somebody might have thought about but never explained clearly to other people on the team.

Sometimes the 3 amigos meeting will hit a question that nobody in the room knows the answer to. These are also a valuable output from the meeting.

Talking through the examples is a great way to get everyone on the same page about what needs to be built.

### Quiz #4
- We want to discover our areas of ignorance before we start developing the next piece of functionality. If we still have unanswered questions about a piece of functionality, it's unlikely that we're in a position to start working on it.

  Before the discovery workshop, the question hadn't been asked. That means it was an unknown unknown - it was something that we were completely unaware of. Now that we have asked the question, it is a known unknown - we are aware that it is an area that we need to learn more about.

  Having discovered the question, the team now has a concrete area to investigate, learning more about the problem they're being asked to solve.

- The test perspective is essential during the discovery process. It allows us to ask difficult "what if " style questions that ensure that we have thought about the story in detail. The team use concrete examples to test their understanding of what they're being asked to deliver, while also testing the product owner's understanding of the functionality they're asking for.


## Introduction to Formulation

Example written in Gherkin (specification language for Cucumber):
```gherkin
Feature: Process refunds

  Scenario: Customer has their receipt
    Given the customer has purchased a kettle for $10
    And they have their receipt
    When the sales assistant processes the refund
    Then the stock inventory for kettles is incremented by 1
    And the customer's card is credited with $10
```

### Quiz #5
- Gherkin is a simple syntax that allows teams to write business readable, executable specifications.

  Some of the Gherkin keywords are **Given**, **When**, and **Then**, but not all text that uses these words is Gherkin.

  Gherkin is understood by a large number of tools, notably Cucumber and Specflow, that effectively turn the specification into automated tests.

- During three amigos the team uses concrete examples to ensure that they have a shared understanding of the functionality they're about to develop. Those concrete examples are **formulated** into Gherkin scenarios.

  So, each scenario is an example.

  Scenario and Example are both keywords in Gherkin.
