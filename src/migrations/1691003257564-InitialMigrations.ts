import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigrations1691003257564 implements MigrationInterface {
    name = 'InitialMigrations1691003257564'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "username" character varying(25) NOT NULL, "password" character varying(127) NOT NULL, "name" character varying(124) NOT NULL, "email" character varying(127) NOT NULL, "tel" character varying array NOT NULL, "joined_in" date NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "UQ_a383ac5d1cc34720ea56a937a13" UNIQUE ("tel"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users_contacts_users" ("usersId_1" integer NOT NULL, "usersId_2" integer NOT NULL, CONSTRAINT "PK_4217b2d7eba784fcf27a169e4b5" PRIMARY KEY ("usersId_1", "usersId_2"))`);
        await queryRunner.query(`CREATE INDEX "IDX_98c57ee6e136828a66874e9dac" ON "users_contacts_users" ("usersId_1") `);
        await queryRunner.query(`CREATE INDEX "IDX_2140e88bf10bf115d935ce76be" ON "users_contacts_users" ("usersId_2") `);
        await queryRunner.query(`ALTER TABLE "users_contacts_users" ADD CONSTRAINT "FK_98c57ee6e136828a66874e9dac0" FOREIGN KEY ("usersId_1") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "users_contacts_users" ADD CONSTRAINT "FK_2140e88bf10bf115d935ce76be2" FOREIGN KEY ("usersId_2") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users_contacts_users" DROP CONSTRAINT "FK_2140e88bf10bf115d935ce76be2"`);
        await queryRunner.query(`ALTER TABLE "users_contacts_users" DROP CONSTRAINT "FK_98c57ee6e136828a66874e9dac0"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_2140e88bf10bf115d935ce76be"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_98c57ee6e136828a66874e9dac"`);
        await queryRunner.query(`DROP TABLE "users_contacts_users"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
