package condicional;

import java.util.Scanner;

public class Prova {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		float sal_carlos, sal_joao;
		int meses;
		 
		Scanner sc = new Scanner(System.in); 
		System.out.println("informe o valor do salario de Carlos:");
		sal_carlos = sc.nextFloat();
		sal_joao = sal_carlos/3;
		meses = 0;
		while(sal_joao < sal_carlos) {
			sal_carlos = (float) (sal_carlos + sal_carlos *0.6/100);
			sal_joao = sal_joao + sal_joao *1/100;
			meses += 1;
			
		}
		System.out.println("serão necessarios" + meses + "meses para que o valor pertence a joao iguale ou ultrapasse o valor pertencente a carlos");
				

	}

}

