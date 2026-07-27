/**
 * Concrete Product - PDF Document
 */
public class PdfDocument implements Document {

    @Override
    public void open() {
        System.out.println("Opening PDF Document...");
    }
}