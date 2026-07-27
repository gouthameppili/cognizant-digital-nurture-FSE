package com;

import org.junit.Test;
import org.mockito.Mockito;
import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.*;

public class MyServiceTest { 
    
    // Mockito Exercise 1: Mocking and Stubbing
    @Test 
    public void testExternalApi() { 
        ExternalApi mockApi = Mockito.mock(ExternalApi.class); 
        when(mockApi.getData()).thenReturn("Mock Data"); 
        
        MyService service = new MyService(mockApi); 
        String result = service.fetchData(); 
        
        assertEquals("Mock Data", result); 
    } 

    // Mockito Exercise 2: Verifying Interactions
    @Test 
    public void testVerifyInteraction() { 
        ExternalApi mockApi = Mockito.mock(ExternalApi.class); 
        MyService service = new MyService(mockApi); 
        
        service.fetchData(); 
        
        verify(mockApi).getData(); 
    } 
}