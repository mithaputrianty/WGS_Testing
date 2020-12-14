# ./features/logout.feature
 
Feature: logout from the WGS website
  As a user i want to be able to logout
 
  Scenario: User success to logout from the website
    Given Browse home page
    When User click Sign Out button
    Then User in login page