const prisma = require("../config/prisma")

// =========================================== BASIC CRUD ===================================
module.exports.get = async (where) => await prisma.user.findFirst({ where })
module.exports.getAll = async () => await prisma.user.findMany()
module.exports.create = async (data) => await prisma.user.create({ data })
module.exports.update = async ({ id }, data) => await prisma.user.update({ where: { id }, data })
module.exports.delete = async ({ id }) => await prisma.user.delete({ where: { id } })

// =========================================== CUSTOM REPOSITORY ===================================

module.exports.createOrganizerInfomation = async (data) => await prisma.organizerInformation.create({data})
module.exports.getOrganizer = async (where) => await prisma.user.findFirst({ where })