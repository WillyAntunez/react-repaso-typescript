
export const TiposBasicos = () => {

  const nombre: string  = 'Fernando';
  const edad: number = 35;
  const estaActivo: boolean = true;

  const poderes: string[] = []; // 'Velocidad', 'Volar', 'Respirar en el agua'

  poderes.push('Velocidad');

  return (
    <>
        <h3>Tipos básicos</h3>
        { nombre }, { edad }, { (estaActivo) ? 'activo' : 'no actuvo' }
        <br />
        { poderes.join(', ') }
    </>
  )
}
