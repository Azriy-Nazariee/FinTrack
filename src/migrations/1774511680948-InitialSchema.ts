import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialSchema1774511680948 implements MigrationInterface {
    name = 'InitialSchema1774511680948'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`budget\` (\`budgetId\` int NOT NULL AUTO_INCREMENT, \`userId\` varchar(255) NOT NULL, \`limitAmount\` decimal(10,2) NOT NULL, \`month\` int NOT NULL, \`year\` int NOT NULL, \`userIdUserId\` int NULL, PRIMARY KEY (\`budgetId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`category\` (\`categoryId\` int NOT NULL AUTO_INCREMENT, \`userId\` varchar(255) NOT NULL, \`name\` varchar(255) NOT NULL, \`userIdUserId\` int NULL, PRIMARY KEY (\`categoryId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`transaction\` (\`transactionId\` int NOT NULL AUTO_INCREMENT, \`amount\` decimal(10,2) NOT NULL, \`type\` varchar(255) NOT NULL, \`date\` datetime NOT NULL, \`dateString\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`userIdUserId\` int NULL, \`categoryIdCategoryId\` int NULL, PRIMARY KEY (\`transactionId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user\` (\`userId\` int NOT NULL AUTO_INCREMENT, \`email\` varchar(255) NOT NULL, \`fullName\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`role\` varchar(255) NOT NULL DEFAULT 'user', \`address\` varchar(255) NOT NULL, \`phoneNumber\` varchar(255) NOT NULL, \`occupation\` varchar(255) NOT NULL, \`monthlyIncome\` decimal(10,2) NOT NULL DEFAULT '0.00', \`createdAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP(), \`updatedAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP, UNIQUE INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` (\`email\`), PRIMARY KEY (\`userId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`budget\` ADD CONSTRAINT \`FK_a2ca1decbf65e5892a12286dcff\` FOREIGN KEY (\`userIdUserId\`) REFERENCES \`user\`(\`userId\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`category\` ADD CONSTRAINT \`FK_aca850f749fe74615c59040d800\` FOREIGN KEY (\`userIdUserId\`) REFERENCES \`user\`(\`userId\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`transaction\` ADD CONSTRAINT \`FK_9fb88bff9a0e9d18e769f58c891\` FOREIGN KEY (\`userIdUserId\`) REFERENCES \`user\`(\`userId\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`transaction\` ADD CONSTRAINT \`FK_a8e0062539476fbaf007609f804\` FOREIGN KEY (\`categoryIdCategoryId\`) REFERENCES \`category\`(\`categoryId\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`transaction\` DROP FOREIGN KEY \`FK_a8e0062539476fbaf007609f804\``);
        await queryRunner.query(`ALTER TABLE \`transaction\` DROP FOREIGN KEY \`FK_9fb88bff9a0e9d18e769f58c891\``);
        await queryRunner.query(`ALTER TABLE \`category\` DROP FOREIGN KEY \`FK_aca850f749fe74615c59040d800\``);
        await queryRunner.query(`ALTER TABLE \`budget\` DROP FOREIGN KEY \`FK_a2ca1decbf65e5892a12286dcff\``);
        await queryRunner.query(`DROP INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` ON \`user\``);
        await queryRunner.query(`DROP TABLE \`user\``);
        await queryRunner.query(`DROP TABLE \`transaction\``);
        await queryRunner.query(`DROP TABLE \`category\``);
        await queryRunner.query(`DROP TABLE \`budget\``);
    }

}
