import { TextField, Button, Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import { db } from '../Firebase/FirebaseConfig.js'; 
import { collection, addDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

const UserinfoPage = () => {

    const cancelarCompra = () => {
        localStorage.removeItem('carrito'); // Elimina todo el contenido del LocalStorage con la clave "carrito"
        alert('Compra cancelada. El carrito se ha vaciado.');
      };

    const enviarCompraAFirestore = async () => {
        const carritoActual = JSON.parse(localStorage.getItem('carrito')) || [];
        try {
            const docRef = await addDoc(collection(db, "compras"), {
            productos: carritoActual
          });
            alert("La compra se ha enviado correctamente a Firestore. El ID de tu compra es: " + docRef.id);
            localStorage.removeItem('carrito');
        } catch (error) {
            console.error('Error al enviar los datos a Firestore:', error);
        }
      };
    
    const form = useForm({
        defaultValues: {
            Nombre: "",
            Apellido: "",
            Telefono: "",
            Email: "",
            ConfirmEmail: "",
    },
    });

    const { register, handleSubmit } = form;

    const onSubmit = (data) => {
        const { Email, Confirm_Email } = data;
          if (Email !== Confirm_Email) {
            alert("Los correos electrónicos no coinciden. Por favor, inténtalo de nuevo.");
          } else {
            enviarCompraAFirestore(data);
          }
        };

    return (
        <div style={{ display: "flex", justifyContent: "center", paddingTop: "100px"}}>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <Stack spacing={4} width={400}>
                    <TextField label="Nombre" type="text" variant="outlined" {...register("Nombre", {required: "campo obligatorio" })}/>
                    <TextField label="Apellido" type="text" variant="outlined"  {...register("Apellido", {required: "campo obligatorio" })}/>
                    <TextField label="Telefono" type="number" variant="outlined"  {...register("Telefono", {required: "campo obligatorio" })}/>
                    <TextField label="Email" type="email" variant="outlined"  {...register("Email", {required: "campo obligatorio" })}/>
                    <TextField label="Confirm Email" type="email" variant="outlined" {...register("Confirm_Email", {required: "campo obligatorio" })}/>
                    <Button variant="outlined" color="error" onClick={cancelarCompra} sx={{margin:"10px"}}>Cancelar compra</ Button>
                    <Button type="submit" variant="contained" color="success">Termiar Compra</Button>
                </Stack>
            </form>
        </div>
    )
    }

export default UserinfoPage;