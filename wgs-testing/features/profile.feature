# ./features/profile.feature
 
Feature: edit profile on the WGS website
  As a user i want to edit profile
 
  Scenario: User success to update profile
    Given User browse profile page
    And User fill first name
    And User fill last name
    And User fill email
    And User fill phone number
    And User fill address
    When User click Update Personal Details button
    Then Data user is saved