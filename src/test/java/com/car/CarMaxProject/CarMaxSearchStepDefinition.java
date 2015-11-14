package com.car.CarMaxProject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.When;

public class CarMaxSearchStepDefinition extends AbstractStepDefinition {
	
	WebDriver driver=getDriver();
	
	@When("^I select \"([^\"]*)\" from first dropdown$")
	public void I_select_from_first_dropdown(String carMake) throws Throwable {
		
		Select name=new Select(driver.findElement(By.name("makes")));
		name.selectByVisibleText(carMake);
	   
	}

	@When("^I select \"([^\"]*)\" from second dropdown$")
	public void I_select_from_second_dropdown(String carPrice) throws Throwable {
		Select name=new Select(driver.findElement(By.name("price")));
		name.selectByVisibleText(carPrice);
	   
	  
	}

}
