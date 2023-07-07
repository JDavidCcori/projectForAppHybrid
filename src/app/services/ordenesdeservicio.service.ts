import { Injectable } from '@angular/core';
import { collection, deleteDoc, doc, Firestore, getDoc, getDocs, orderBy, query, setDoc } from '@angular/fire/firestore';
import { OrdenDeServicio, ordenDeServicioConverter } from '../models/ordendeservicio.model';

@Injectable({
    providedIn: 'root'
})
export class OrdenesDeServicioService {
    constructor(
        private _fireStore: Firestore,
    ) { }

    public async getAll(): Promise<OrdenDeServicio[]> {
        const ordenesDeServicio: OrdenDeServicio[] = [];
        const q = query(collection(this._fireStore, "ordenesdeservicio"), orderBy("fechahoraentrada", "desc")).withConverter(ordenDeServicioConverter);
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            ordenesDeServicio.push(doc.data());
        });
        return ordenesDeServicio;
    }

    async update(ordenDeServicio: OrdenDeServicio) {
        ordenDeServicio.fechahoraentrada = new Date(ordenDeServicio.fechahoraentrada);
        const clientesRef = collection(this._fireStore, "ordenesdeservicio");

        if (ordenDeServicio.ordendeservicioid.length == 0) {
            await setDoc(doc(clientesRef).
                withConverter(ordenDeServicioConverter), ordenDeServicio);

        } else {
            await setDoc(doc(this._fireStore, "ordenesdeservicio", ordenDeServicio.ordendeservicioid).
                withConverter(ordenDeServicioConverter), ordenDeServicio);
        }
    }

    async getById(clienteId: string): Promise<OrdenDeServicio> {
        const q = doc(this._fireStore, "ordenesdeservicio", clienteId).withConverter(ordenDeServicioConverter);
        const querySnapshot = await getDoc(q);
        return querySnapshot.data()!;
    }

    async removeById(ordenesDeServicioId: string) {
        await deleteDoc(doc(this._fireStore, "ordenesdeservicio", ordenesDeServicioId));
    }
}