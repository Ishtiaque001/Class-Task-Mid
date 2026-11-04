import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFacultyDto } from './dto/create-faculty.dto.js';
import { Faculty } from './entities/faculty.entity.js';

@Injectable()
export class FacultiesService {
  constructor(
    @InjectRepository(Faculty)
    private readonly facultyRepo: Repository<Faculty>,
  ) {}

  async create(dto: CreateFacultyDto): Promise<Faculty> {
    if (await this.facultyRepo.existsBy({ id: dto.id })) {
      throw new ConflictException(`Faculty with id ${dto.id} already exists`);
    }
    return this.facultyRepo.save(this.facultyRepo.create(dto));
  }
}