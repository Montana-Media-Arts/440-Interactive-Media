// import Bicycle;

public class Classes {
    public static void main(String[] args) {
        Bicycle bike1 = new Bicycle(3, 100, 100);
        int numOfBikes;

        for (int i = 0; i < 10; i++ ) {

            bike1.applyBrake( 2 );

            System.out.println(bike1.getSpeed() );
        }

        // System.out.println(Bicycle.getNumberOfBicycles());


    }

}
