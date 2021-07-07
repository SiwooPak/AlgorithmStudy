import java.util.Scanner;

public class Snail {
	private Scanner scan = new Scanner(System.in);
	private int day = 0;
	
	public void calculate() {
		String[] input = scan.nextLine().split(" ");
		int a = Integer.parseInt(input[0]);
		int b = Integer.parseInt(input[1]);
		int v = Integer.parseInt(input[2]);
		
		while (true) {
			v -= a;
			if (v < 0) {
				System.out.print(day);
				break;
			}
			if (v == 0) {
				day++;
				System.out.print(day);
				break;
			}
			day++;
			v += b;
		}
	}
	
	public void run() {
		calculate();
	}
	public static void main(String[] args) {
		Snail app = new Snail();
		app.run();
	}
}
