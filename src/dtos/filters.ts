import { IsArray, IsNumber, IsOptional, IsString } from "class-validator";

export class FiltersDTO {
    @IsOptional()
    @IsArray()
    genres?: string[];

    @IsOptional()
    @IsString()
    format?: string;

    @IsOptional()
    @IsNumber()
    minScore?: number;
}