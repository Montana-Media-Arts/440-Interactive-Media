import java.util.Scanner;

public class AreaFromConsole {
    public static void main(String[] args) {

        // create a new scanner object
        Scanner input = new Scanner(System.in);

        double radius;
        double area;

        System.out.print("Enter a number for radius: ");
        // Read in radius
        radius = input.nextDouble();

        // computer area
        area = radius * radius * 3.14159;

        // display results
        System.out.println("The area for the circle of radius " + radius + " is " + area);
    }
}
