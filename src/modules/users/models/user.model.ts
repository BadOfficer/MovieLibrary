import { Column, HasMany, Model, Table } from "sequelize-typescript";
import { Bookmarkslist } from "src/modules/bookmarkslist/models/bookmarkslist.model";
import { Likedlist } from "src/modules/likedlist/models/likedlist.model";

@Table
export class User extends Model{

    @Column
    first_name: string
    
    @Column
    last_name: string 

    @Column
    email: string

    @Column
    password: string

    @HasMany(() => Likedlist, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    })
    likedlist: Likedlist[]

    @HasMany(() => Bookmarkslist, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    })
    bookmarkslist: Bookmarkslist[]
}