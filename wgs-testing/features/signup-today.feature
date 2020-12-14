# ./features/signup-today.feature
 
Feature: go to register page on the WGS website
  As a user i want to go to register page
 
  Scenario: User success to go to register page
    Given User browse home page
    When User click Signup Today button
    Then User in register page