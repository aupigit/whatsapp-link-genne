export const initialValues = {
    slider: 12,
    symbols: true,
    numbers: true,
    lowerCase: true,
    upperCase: true,
    excludeSimilar: false,
    password: '',
    showPassword: false,
}

export const marks = [
    {
        value: 8,
        label: 8,
    },
    {
        value: 10,
        label: 10,
    },
    {
        value: 12,
        label: 12,
    },
    {
        value: 14,
        label: 14,
    },
    {
        value: 16,
        label: 16,
    },
    {
        value: 18,
        label: 18,
    },
    {
        value: 20,
        label: 20,
    },
    {
        value: 22,
        label: 22,
    },
    {
        value: 24,
        label: 24,
    },
]

export const passwordOptions = [
    {
        id: 1,
        label: 'Incluir símbolos',
        name: 'symbols',
    },
    {
        id: 2,
        label: 'Incluir números',
        name: 'numbers',
    },
    {
        id: 3,
        label: 'Incluir caracteres minúsculos',
        name: 'lowerCase',
    },
    {
        id: 4,
        label: 'Incluir caracteres maiúsculos',
        name: 'upperCase',
    },
    {
        id: 5,
        label: 'Excluir caracteres semelhantes',
        name: 'excludeSimilar',
    },
]

export const includedItems = ['a', 'c', 'e', 'f', 'g', 'h', 'j', 'k', 'm', 'n', 'p', 'r', 't', 'u', 'v', 'w', 'x', 'y']
