import { Address } from "./address";

export class Profile {
    public id!:number
    public firstName!: string;
    public lastName!: string;
    public phoneNumber!: string;
    public address!: Address;
    public isSBWSCompliant!: boolean;
    public areMandatoryCoursesDone!: boolean;
}
