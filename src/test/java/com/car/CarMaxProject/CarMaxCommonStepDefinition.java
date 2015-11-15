package com.car.CarMaxProject;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class CarMaxCommonStepDefinition extends AbstractStepDefinition{
	WebDriver driver=getDriver();
	
	
	@Given("^I am in CarMax Used Car Search Page$")
	public void I_am_in_CarMax_Used_Car_Search_Page() throws Throwable {
		driver.get("http://www.carmax.com/cars?intcmp=XFER2010VARIOUSL01transfer_landing");
	  
	}

	

	@When("^I click on \"([^\"]*)\" button$")
	public void I_click_on_button(String search) throws Throwable {
		driver.findElement(By.xpath("//input[@value='"+search+"']")).click();
		
		
		
	   
	}
	
	
	@Then("^I should get navigated to \"([^\"]*)\" title page$")
	public void I_should_get_navigated_to_title_page(String title) throws Throwable {
		
		String Title=driver.getTitle();
	System.out.println("title"+title);	
	System.out.println("getTitle"+Title);	
	
		
Assert.assertTrue(driver.getTitle().equals(title));
	
		
		//CarMax - Browse used cars and new cars online

//Car Finder by Zip Code at carmax.com

	   
	}



}
