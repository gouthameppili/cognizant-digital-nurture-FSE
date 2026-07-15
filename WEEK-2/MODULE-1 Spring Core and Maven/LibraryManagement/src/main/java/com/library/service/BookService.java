package com.library.service;

import com.library.repository.BookRepository;

public class BookService {
    
    // Dependency
    private BookRepository bookRepository;

    // Setter method for Spring IoC to inject the dependency
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void manageBooks() {
        System.out.println("Service layer activated. Requesting data...");
        // Verifying the dependency is injected and functioning
        bookRepository.fetchAllBooks();
    }
}