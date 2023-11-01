import { IsNotEmpty, IsString } from "class-validator";

export class CreateMoodDTO {
    @IsNotEmpty()
    @IsString()
    name: string;
}