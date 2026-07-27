public class FinancialForecast {

    // Recursive Method
    public static double forecastRecursive(double presentValue,
                                           double growthRate,
                                           int years) {

        if (years == 0) {
            return presentValue;
        }

        return forecastRecursive(
                presentValue * (1 + growthRate),
                growthRate,
                years - 1);
    }

    // Iterative Method
    public static double forecastIterative(double presentValue,
                                           double growthRate,
                                           int years) {

        double value = presentValue;

        for (int i = 0; i < years; i++) {
            value *= (1 + growthRate);
        }

        return value;
    }

    public static void main(String[] args) {

        double presentValue = 100000;
        double growthRate = 0.10;

        System.out.println("=== Financial Forecasting Tool ===\n");

        System.out.println("Present Value : Rs. " + presentValue);
        System.out.println("Growth Rate   : " + (growthRate * 100) + "%");

        // Recursive Forecast
        System.out.println("\n--- Forecast using Recursive Approach ---");

        for (int year = 1; year <= 5; year++) {

            double futureValue =
                    forecastRecursive(
                            presentValue,
                            growthRate,
                            year);

            System.out.printf(
                    "Year %d : Rs. %.2f%n",
                    year,
                    futureValue);
        }

        // Iterative Forecast
        System.out.println("\n--- Forecast using Iterative Approach ---");

        for (int year = 1; year <= 5; year++) {

            double futureValue =
                    forecastIterative(
                            presentValue,
                            growthRate,
                            year);

            System.out.printf(
                    "Year %d : Rs. %.2f%n",
                    year,
                    futureValue);
        }

        // Forecast for 10 Years
        System.out.println("\n--- Forecast for 10 years ---");

        double future10 =
                forecastRecursive(
                        presentValue,
                        growthRate,
                        10);

        System.out.printf(
                "Year 10 : Rs. %.2f%n",
                future10);

        // Complexity Analysis
        System.out.println("\n--- Time Complexity Analysis ---");

        System.out.println(
                "Recursive Method:");
        System.out.println(
                "Time Complexity      : O(n)");
        System.out.println(
                "Auxiliary Space      : O(n) (recursive call stack)");

        System.out.println();

        System.out.println(
                "Iterative Method:");
        System.out.println(
                "Time Complexity      : O(n)");
        System.out.println(
                "Auxiliary Space      : O(1)");

        System.out.println(
                "\nOptimization:");
        System.out.println(
                "Use iteration to avoid excessive recursion");
        System.out.println(
                "and stack overflow for large year values.");
    }
}