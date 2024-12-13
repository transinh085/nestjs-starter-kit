import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1734084295013 implements MigrationInterface {
    name = 'Init1734084295013'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`email\` varchar(255) NOT NULL, \`fullName\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`isActive\` tinyint NOT NULL DEFAULT 1, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`todo_item\` (\`id\` int NOT NULL AUTO_INCREMENT, \`content\` text NOT NULL, \`isCompleted\` tinyint NOT NULL DEFAULT 0, \`createdAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updatedAt\` timestamp NULL ON UPDATE CURRENT_TIMESTAMP, \`todoId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`todo\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(100) NOT NULL, \`description\` text NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`isArchived\` tinyint NOT NULL DEFAULT 0, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`todo_item\` ADD CONSTRAINT \`FK_c6457ad86a730f67df8f7426df1\` FOREIGN KEY (\`todoId\`) REFERENCES \`todo\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`todo_item\` DROP FOREIGN KEY \`FK_c6457ad86a730f67df8f7426df1\``);
        await queryRunner.query(`DROP TABLE \`todo\``);
        await queryRunner.query(`DROP TABLE \`todo_item\``);
        await queryRunner.query(`DROP TABLE \`user\``);
    }

}
