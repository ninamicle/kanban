import { ColumnModule } from './column.module';
export class BoardModel {
  constructor(public name: string, public column: ColumnModule[]) {}
}
