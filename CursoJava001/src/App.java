import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {
        String nom;
        // Crear el Obejto Scanner luego de importar y le asignamos el nombre que deseamos
        Scanner entrada=new Scanner(System.in);
        System.out.println("-------Entrada de Datos ------");
        System.out.println("Ingrese su nombre");
        
        nom=entrada.nextLine();
        System.out.println("Su nombre es: "+nom);
        
        entrada.close();
    }
}
