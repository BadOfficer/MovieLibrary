import { Column, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "src/modules/users/models/user.model";

@Table
export class Bookmarkslist extends Model{
    @ForeignKey(() => User)
    user: User

    @Column
    name: string
}