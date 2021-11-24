class DbClient {
  async connect() {
    throw new Error("falta implementar 'connect' en subclase!");
  }

  async disconnect() {
    throw new Error("falta implementar 'disconnect' en subclase!");
  }
}

export default DbClient;
