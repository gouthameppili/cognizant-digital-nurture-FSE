package com.cognizant.springlearn;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

@SpringBootApplication
public class SpringLearnApplication {

    private static final Logger LOGGER = LoggerFactory.getLogger(SpringLearnApplication.class);

    public static void main(String[] args) {
        SpringApplication.run(SpringLearnApplication.class, args);
        
        // Hands-on 1 requirement
        LOGGER.info("Inside main");
        
        // Hands-on 4 requirement
        displayCountry();
    }

    private static void displayCountry() {
        // Load context from country.xml
        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
        
        // Retrieve the bean
        Country country = context.getBean("country", Country.class);
        
        // Display the country details
        LOGGER.debug("Country : {}", country.toString());
    }
}