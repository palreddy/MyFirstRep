$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CarMaxFeature.feature");
formatter.feature({
  "id": "select-a-used-car-from-carmax-site",
  "description": "as a user \nI want to select a used car from CarMax site\nSo that I want to get navigated to next page",
  "name": "Select a used car from CarMax Site",
  "keyword": "Feature",
  "line": 1
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 6,
  "type": "background"
});
formatter.step({
  "name": "I am in CarMax Used Car Search Page",
  "keyword": "Given ",
  "line": 7
});
formatter.match({
  "location": "CarMaxCommonStepDefinition.I_am_in_CarMax_Used_Car_Search_Page()"
});
formatter.result({
  "duration": 42076495000,
  "status": "passed"
});
formatter.scenario({
  "id": "select-a-used-car-from-carmax-site;used-car-selection-from-carmax-site",
  "description": "",
  "name": "used car selection from CarMax site",
  "keyword": "Scenario",
  "line": 9,
  "type": "scenario"
});
formatter.step({
  "name": "I select \"BMW\" from first dropdown",
  "keyword": "When ",
  "line": 11
});
formatter.step({
  "name": "I select \"$25,000\" from second dropdown",
  "keyword": "And ",
  "line": 12
});
formatter.step({
  "name": "I click on \"Search\" button",
  "keyword": "And ",
  "line": 13
});
formatter.step({
  "name": "I should get navigated to \"Car Finder by Zip Code at carmax.com\" title page",
  "keyword": "Then ",
  "line": 14
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 10
    }
  ],
  "location": "CarMaxSearchStepDefinition.I_select_from_first_dropdown(String)"
});
formatter.result({
  "duration": 1744117000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$25,000",
      "offset": 10
    }
  ],
  "location": "CarMaxSearchStepDefinition.I_select_from_second_dropdown(String)"
});
formatter.result({
  "duration": 230631000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Search",
      "offset": 12
    }
  ],
  "location": "CarMaxCommonStepDefinition.I_click_on_button(String)"
});
formatter.result({
  "duration": 1960630000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Car Finder by Zip Code at carmax.com",
      "offset": 27
    }
  ],
  "location": "CarMaxCommonStepDefinition.I_should_get_navigated_to_title_page(String)"
});
formatter.result({
  "duration": 1870800000,
  "status": "passed"
});
});