export interface OrdenDeServicio {
    ordendeservicioid: string;
    clienteid: string;
    vehiculo: string;
    fechahoraentrada: Date;
}

export const ordenDeServicioConverter = {
    toFirestore: (ordenDeServicio: any) => {
        return <OrdenDeServicio>{
            clienteid: ordenDeServicio.clienteid,
            vehiculo: ordenDeServicio.vehiculo,
            fechahoraentrada: ordenDeServicio.fechahoraentrada,
        };
    },
    fromFirestore: (snapshot: any, options: any)=> {
        const data = snapshot.data(options);
        return <OrdenDeServicio>{
            ordendeservicioid: snapshot.id,
            clienteid: data.clienteid,
            vehiculo: data.vehiculo,
            fechahoraentrada: data.fechahoraentrada.toDate(),
        }
    }
}