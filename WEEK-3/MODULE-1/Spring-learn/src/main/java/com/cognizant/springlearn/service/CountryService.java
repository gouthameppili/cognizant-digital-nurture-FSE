package com.cognizant.springlearn.service;

import java.util.List;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Service;
import com.cognizant.springlearn.Country;

@Service
public class CountryService {

    public Country getCountry(String code) {
        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
        
        @SuppressWarnings("unchecked")
        List<Country> countries = (List<Country>) context.getBean("countryList");

        // Lambda expression for case-insensitive matching
        return countries.stream()
                .filter(country -> country.getCode().equalsIgnoreCase(code))
                .findFirst()
                .orElse(null); // Returns null if country code is not found
    }
}