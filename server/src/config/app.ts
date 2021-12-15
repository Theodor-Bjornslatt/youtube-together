export const { NODE_ENV = 'development', APP_PORT = 8000 } = process.env

export const IN_PROD = NODE_ENV === 'production'
