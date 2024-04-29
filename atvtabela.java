package condicional;

import java.util.Scanner;

public class atvtabela {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);
		
		int carro, preco_final;
		System.out.println("Digite o valor do carro");
		carro = sc.nextInt();
		
		System.out.println("A quantidade de parcelas pode ser: 6, 12, 18, 24, 30, 36, 42, 48, 54 e 60 meses");
		System.out.println("Sendo..............................3%...6%...9%...12%.15%.18%.21%.24%.27%..30% de juros");
		System.out.println("compra a vista tem desconto de 20%");
		System.out.println();

	}

}
