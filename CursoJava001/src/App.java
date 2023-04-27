import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {
        String nom, nom1;
        int n1,num;
        char Ca;
        
        
        // Crear el Obejto Scanner luego de importar y le asignamos el nombre que deseamos
        Scanner entrada=new Scanner(System.in);
        System.out.println("-------Entrada de Datos ------");

        //Ingresante
        System.out.print("Ingrese su nombre: ");        
        nom=entrada.nextLine();

        //Saliente
        System.out.println("Su nombre es: "+nom);

        System.out.println("----------Metodo PRINT------");
        System.out.println("Ingrese un palabra: ");          
        nom1=entrada.nextLine();

        System.out.println("Ingrese un numero");
        n1=entrada.nextInt();

        System.out.printf("Palabra:%s Numero:%d", nom1,n1);


        System.out.println("--------Metodos Int,Char--------");
        System.out.println("Ingrese su edad");        
        num=entrada.nextInt();

        System.out.println("Ingrese una letra");
        
        Ca=entrada.next().charAt(0);
        System.out.println("Su edad es: "+ num+" El caracter es: " +Ca);        
       
        System.out.println("Hola\tque tal\b ");


        entrada.close();
    }
}
