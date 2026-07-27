

/**
 * Logger class implementing Singleton Design Pattern.
 * Ensures only one instance exists throughout the application.
 */
public class Logger {

    // Static variable to hold single instance
    private static Logger instance;

    private Logger() {
        System.out.println("Logger Instance Created");
    }

    
    //   Returns the single instance of Logger.
     
    public static Logger getInstance() {
        if (instance == null) {
            instance = new Logger();
        }
        return instance;
    }

    
    public void log(String message) {
        System.out.println("[LOG] " + message);
    }
}


