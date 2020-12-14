# ./features/login.feature
 
Feature: login on the WGS website
  As a user i want to be able to login
 
  Scenario: User success to login on the website
    Given Browse login page
    And User fill email login
    And User fill password 
    When User click Login button
    Then User in user page