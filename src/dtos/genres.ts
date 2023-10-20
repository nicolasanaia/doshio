import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateGenreDTO {
    @IsString()
    @IsNotEmpty()
    name: string;
}