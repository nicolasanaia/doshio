import { IsArray, IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateGenreDTO {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsBoolean()
    @IsOptional()
    active: boolean = true;
}

export class CreateGenresListDTO {
    @IsArray()
    @IsNotEmpty()
    genres: CreateGenreDTO[];
}

export class getGenreByNameDTO {
    @IsNotEmpty()
    @IsString()
    name: string;
}