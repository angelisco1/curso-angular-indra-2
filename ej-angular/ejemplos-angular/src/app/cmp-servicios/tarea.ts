export class Tarea {
  constructor(
    public titulo: string,
    public completada: boolean,
    public autor: string,
    public id: string | null = null) {}
}