# ./features/bank-address.feature
 
Feature: edit bank address on the WGS website
  As a user i want to edit bank address
 
  Scenario: User success to update bank address
    Given Browse profile page
    And User click Bank Account button
    And User fill beneficiary name
    And User fill beneficiary bank
    And User fill beneficiary account
    And User fill bank address
    When User click Submit button
    Then Data is saved