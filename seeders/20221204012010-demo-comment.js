'use strict';

const uuid = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up (queryInterface, Sequelize) {
		const posts = await queryInterface.sequelize.query(
			`SELECT id from "Posts";`
		);

		const wallets = await queryInterface.sequelize.query(
			`SELECT id from "Wallets";`
		);

		console.log(wallets[0][0].id)

		await queryInterface.bulkInsert('Comments', [{
			id: uuid.v4(),
			comment: 'Test Comment 1',
			postId: posts[0][0].id,
			walletId: wallets[0][0].id,
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			id: uuid.v4(),
			comment: 'Test Comment 2',
			postId: posts[0][0].id,
			walletId: wallets[0][0].id,
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			id: uuid.v4(),
			comment: 'Test Comment 3',
			postId: posts[0][1].id,
			walletId: wallets[0][1].id,
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			id: uuid.v4(),
			comment: 'Test Comment 4',
			postId: posts[0][1].id,
			walletId: wallets[0][1].id,
			createdAt: new Date(),
			updatedAt: new Date()
		}], {});
	},

	async down (queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Comments', null, {});
	}
};
