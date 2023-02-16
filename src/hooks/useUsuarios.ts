import { useEffect, useRef, useState } from 'react';
import { reqResAPI } from '../api/reqRes';
import { ReqResListado, Usuario } from '../interfaces/reqRes';

export const useUsuarios = () => {

    const [ usuarios, setUsuarios ] = useState<Usuario[]>([]);
    
    const paginaRef = useRef<number>(1);
    const isFirstLoad = useRef<boolean>(true);

    
    const cargarUsuarios = async (page:number): Promise<Usuario[] | undefined> => {
        const resp = await reqResAPI.get<ReqResListado>('/users', {
            params: {
                page: page,
            },
        });
        
        if(resp.data.data.length > 0){
            return resp.data.data
        }else{
            return undefined;
        }
    };

    const firstLoad = async (firstIndex:number = 1) => {
        const newUsuarios = await cargarUsuarios(firstIndex);

        if(newUsuarios){
            setUsuarios(newUsuarios);
        }else{
            alert('Hubo un problema al cargar los primeros usuarios')
        }
    };

    const paginaSiguiente = async () => {
        const newUsuarios = await cargarUsuarios(paginaRef.current + 1);
        
        if(newUsuarios){
            paginaRef.current++;
            setUsuarios(newUsuarios);
        }else{
            alert('No hay más registros');
        }
    };

    const paginaAnterior =async () => {
        if(paginaRef.current > 1){
            const newUsuarios = await cargarUsuarios(paginaRef.current - 1);
            
            if(newUsuarios){
                paginaRef.current--;
                setUsuarios(newUsuarios);
            }
        }else{
            alert('No hay más registros');
        }
    };
    
    useEffect(() => {
        if(isFirstLoad.current){
            isFirstLoad.current = false;
            firstLoad();
        }
    }, []);

    return{
        paginaSiguiente,
        paginaAnterior, 
        usuarios,
    };
}