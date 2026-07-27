import java.util.Arrays;
import java.util.Comparator;

public class EcommerceSearch {

    // Linear Search by Product Name
    public static Product linearSearch(Product[] products, String targetName) {

        for (Product product : products) {
            if (product.getProductName().equalsIgnoreCase(targetName)) {
                return product;
            }
        }

        return null;
    }

    // Binary Search by Product Name
    public static Product binarySearch(Product[] products, String targetName) {

        int left = 0;
        int right = products.length - 1;

        while (left <= right) {

            int mid = left + (right - left) / 2;

            int comparison =
                    products[mid].getProductName()
                            .compareToIgnoreCase(targetName);

            if (comparison == 0) {
                return products[mid];
            }

            if (comparison < 0) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return null;
    }

    public static void main(String[] args) {

        Product[] products = {
                new Product(101, "Laptop", "Electronics"),
                new Product(102, "Watch", "Accessories"),
                new Product(103, "Phone", "Electronics"),
                new Product(104, "Shoes", "Fashion")
        };

        System.out.println("=== E-commerce Search Demo ===");

        // -------------------------
        // Linear Search
        // -------------------------
        System.out.println("\n--- Linear Search ---");

        Product result1 = linearSearch(products, "Phone");

        System.out.print("Search 'Phone'   : ");
        System.out.println(result1 != null ? result1 : "Not Found");

        Product result2 = linearSearch(products, "Tablet");

        System.out.print("Search 'Tablet'  : ");
        System.out.println(result2 != null ? result2 : "Not Found");

        // -------------------------
        // Binary Search
        // -------------------------

        Arrays.sort(products,
                Comparator.comparing(Product::getProductName));

        System.out.println("\n--- Binary Search (sorted array) ---");

        Product result3 = binarySearch(products, "Laptop");

        System.out.print("Search 'Laptop'  : ");
        System.out.println(result3 != null ? result3 : "Not Found");

        Product result4 = binarySearch(products, "Camera");

        System.out.print("Search 'Camera'  : ");
        System.out.println(result4 != null ? result4 : "Not Found");

        // -------------------------
        // Analysis
        // -------------------------

        System.out.println("\n--- Time Complexity Analysis ---");

        System.out.println(
                "Linear Search  -> Best: O(1) | Avg: O(n) | Worst: O(n)");

        System.out.println(
                "Binary Search  -> Best: O(1) | Avg: O(log n) | Worst: O(log n)");

        System.out.println(
                "\nBinary Search is FASTER but requires a sorted array!");
    }
}