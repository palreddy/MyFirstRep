Feature: Select a used car from CarMax Site
as a user 
I want to select a used car from CarMax site
So that I want to get navigated to next page

Background:
Given I am in CarMax Used Car Search Page

Scenario: used car selection from CarMax site

When I select "BMW" from first dropdown
And I select "$25,000" from second dropdown
And I click on "Search" button
Then I should get navigated to "Car Finder by Zip Code at carmax.com" title page
