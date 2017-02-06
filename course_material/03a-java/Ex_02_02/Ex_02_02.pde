

UserCircle user1;

void setup() {
  size(480, 120);
  //frameRate(1);
  
  user1 = new UserCircle(30);
}



void draw() {

   user1.drawCircle();
  
  

}

public class UserCircle{
  private int size;
  
  UserCircle(int initSize){
    size = initSize;
  }
  
  public void drawCircle(){
    fill(100, 32, 10);
    ellipse(mouseX, mouseY, size, size);
  }
  
}