import { TableColumn, type MigrationInterface, type QueryRunner } from 'typeorm'

export class AddAvatarFieldToUsers1696039971100 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn('users', new TableColumn({
      name: 'avatar',
      type: 'varchar',
      isNullable: true
    }))
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('users', 'avatar')
  }
}
