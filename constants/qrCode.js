export const initialValues = {
    qrCodeName: 'qr-code',
    websiteLink: 'https://aupi.com.br/',
    logoBackgroundTransparent: false,
    logoUpload: '',
    logoName: '',
}

export const qrCodeInputs = [
    {
        label: 'QR Code Name',
        name: 'qrCodeName',
        placeholder: 'qr-code',
    },
    {
        label: 'Link do Site',
        name: 'websiteLink',
        type: 'url',
        placeholder: 'https://aupi.com.br/',
    },
]
