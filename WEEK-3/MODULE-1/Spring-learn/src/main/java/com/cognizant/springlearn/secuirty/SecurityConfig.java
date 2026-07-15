package com.cognizant.springlearn.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.csrf().disable()
            .authorizeRequests()
            // Allow access to the endpoints created in these exercises
            .antMatchers("/hello").permitAll()
            .antMatchers("/country/**").permitAll()
            .antMatchers("/countries/**").permitAll()
            .antMatchers("/authenticate").permitAll()
            .anyRequest().authenticated();
            
        return http.build();
    }
}