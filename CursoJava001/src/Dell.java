public class EntradaDatos {
        public static void main(String[] args) {
        String nom;
        // Crear el Obejto Scanner luego de importar y le asignamos el nombre que deseamos
        Scanner entrada=new Scanner(System.in);
        System.out.println("-------Entrada de Datos ------");
        System.out.println("Ingrese su nombre");
        
        nom=entrada.nextLine();
        System.out.println("Su nombre es: "+nom);
        
    //Metodos de la clase Scanner:
// nex.Line =Ingresa datos tipo String
// nex.Int = Ingresa numeros Enteros
// next.Double o Float = Ingresa numeros con decimales
// next.charAt(0) =  Lee un Solo un caracter asignado en el valor 0
// next.Boolean() = Es para ingresar true o false
System.out.println("--------Metodos Int,Char--------");
        System.out.println("Ingrese su edad");
        int num;
        num=entrada.nextInt();
        System.out.println("Ingrese una letra");
        char Ca;
        Ca=entrada.next().charAt(0);
        System.out.println("Su edad es: "+ num+" El caracter es: " +Ca);
        
     

//Metodo Print:  prinln,printf,print
//printf = Formatea datos usando caracteres especiales
// %s=Imprime caracter %d=imprime enteros %f=imprime decimales
     System.out.println("----------Metodo PRINT------");
     System.out.println("Ingrese un palabra");
          String nom1;
          nom1=entrada.nextLine();
          System.out.println("Ingrese un numero");
          int n1;
          n1=entrada.nextInt();
          System.out.printf("Palabra:%s Numero:%d", nom1,n1);
      
        
// Caracteres Especiales;
// \n=Salto de linea \t=Genera un espacio \b=Borra un caracter hacia la Izquierda

        System.out.println("Hola\tque tal\b ");



        
    }
    
}