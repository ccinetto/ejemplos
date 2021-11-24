interface dbClientAbstract {
  connect(): Promise<void>;
  disconnect(): Promise<void>;
}

export default dbClientAbstract;
