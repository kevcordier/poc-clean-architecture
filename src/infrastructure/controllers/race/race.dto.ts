import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateRaceDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  readonly id: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  readonly title: string;
}

export class AddRaceDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  readonly title: string;
}
