import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm";

export class FkProvider1716779003858 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const foreignKeyUser = new TableForeignKey({
      name: "AppointmentProvider",
      referencedTableName: "users",
      referencedColumnNames: ["id"],
      columnNames: ["provider_id"],
      onDelete: "SET NULL",
      onUpdate: "CASCADE",
    });
    await queryRunner.createForeignKey("appointments", foreignKeyUser);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("appointments", "AppointmentProvider");
  }
}
