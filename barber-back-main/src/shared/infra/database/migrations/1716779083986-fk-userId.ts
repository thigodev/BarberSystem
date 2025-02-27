import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm";

export class FkUserId1716779083986 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const foreignKeyUser = new TableForeignKey({
      name: "TokenUser",
      referencedTableName: "users",
      referencedColumnNames: ["id"],
      columnNames: ["user_id"],
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
    await queryRunner.createForeignKey("user_tokens", foreignKeyUser);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("user_tokens", "TokenUser");
  }
}
