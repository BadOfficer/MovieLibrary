import { Column, Model, Table } from "sequelize-typescript";
import { User } from "src/modules/users/models/user.model";

@Table
export class Likedlist extends Model {
    @Column
    user: User

    @Column
    name: string

    @Column
    assetId: string
}