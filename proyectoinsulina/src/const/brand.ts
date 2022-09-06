
export const BRAND:Record<ActiveBrands, BrandValues> = {
    APIDRA: {name: 'Apidra'},
    LEVEMIR: {name: 'Levemir'},
    HUMULINR: {name: 'HumulinR'},
};

export type ActiveBrands = 'APIDRA' | 'LEVEMIR' | 'HUMULINR'; 

interface BrandValues {
    name:string, 
};

