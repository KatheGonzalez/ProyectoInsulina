
export const STATES:Record<ActiveStates, StateValues> = {
    CREATED: {name: 'Creado', background:'var(--blue-dark)'},
    ASSIGNED: {name: 'Asignado', background: 'var(--orange-normal)'},
    COLLECTED: {name: 'Obtenida', background: 'var(--purple-light)'},
    VERIFIED: {name: 'Verificada', background: 'var(--green-normal)'},
    DELETED: {name: 'Eliminado', background: 'var(--black-normal)'}
}

export type ActiveStates = 'CREATED' | 'ASSIGNED' | 'COLLECTED' | 'VERIFIED' | 'DELETED';

interface StateValues {
    name: string,
    background: string
}

