import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigrations1691333994716 implements MigrationInterface {
    name = 'InitialMigrations1691333994716'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users_contacts_users" DROP CONSTRAINT "FK_2140e88bf10bf115d935ce76be2"`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710" UNIQUE ("username")`);
        await queryRunner.query(`ALTER TABLE "users_contacts_users" ADD CONSTRAINT "FK_2140e88bf10bf115d935ce76be2" FOREIGN KEY ("usersId_2") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users_contacts_users" DROP CONSTRAINT "FK_2140e88bf10bf115d935ce76be2"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710"`);
        await queryRunner.query(`ALTER TABLE "users_contacts_users" ADD CONSTRAINT "FK_2140e88bf10bf115d935ce76be2" FOREIGN KEY ("usersId_2") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

}
