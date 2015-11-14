package com.car.CarMaxProject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class  AbstractStepDefinition {
	private static WebDriver driver;
	
	WebDriver getDriver(){
		if(driver==null){
			driver=new FirefoxDriver();
		}
		return driver;
	}

}
