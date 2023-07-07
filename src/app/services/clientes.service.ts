import { Injectable } from '@angular/core';
import { Cliente, clienteConverter } from '../models/cliente.model';
import { Firestore, collection, getDocs, setDoc, doc, query, orderBy, getDoc, deleteDoc } from '@angular/fire/firestore';


@Injectable({
    providedIn: 'root'
})
export class ClientesService {
    constructor(
        private _fireStore: Firestore,
    ) {
    }

    async create(cliente: Cliente): Promise<void> {
        try {
            const clientesRef = collection(this._fireStore, "clientes");

            await setDoc(doc(clientesRef), 
            {
                nombre: cliente.nombre,
                email: cliente.email,
                telefono: cliente.telefono,
                ingreso: cliente.ingreso,
                foto: cliente.foto,
                nacimiento: cliente.nacimiento,
            } );
        } catch (e) {
            console.error(e);
        }
    }

    async getAll(): Promise<Cliente[]> {
        const clientes: Cliente[] = [];
        const q = query(collection(this._fireStore, "clientes"), orderBy("nombre")).withConverter(clienteConverter);
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            clientes.push(doc.data());
        });
        return clientes;
    }

    async getById(clienteId: string): Promise<Cliente> {
        const q = doc(this._fireStore, "clientes", clienteId).withConverter(clienteConverter);
        const querySnapshot = await getDoc(q);
        return querySnapshot.data()!;
    }

    async update(cliente: Cliente) {
        await setDoc(doc(this._fireStore, "clientes", cliente.clienteid).
            withConverter(clienteConverter), cliente);
    }

    async removeById(clienteId: string) {
        await deleteDoc(doc(this._fireStore, "clientes", clienteId));
    }

    async getByNome(nombre: string): Promise<Cliente[]> {
        const clientes: Cliente[] = await this.getAll();

        if (!nombre) {
            return clientes;
        }

        return clientes.filter(
            cliente => cliente.nombre.toLowerCase().startsWith(nombre.toLowerCase()));
    }
}