const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllKelas = async (filterParams = {}, orderBy = 'nama', sort = 'asc', search = '') => {
  const { nama, harga } = filterParams;

  const whereClause = {
    AND: [
      nama ? { nama: { contains: nama.toLowerCase() } } : undefined,
      harga ? { harga: parseFloat(harga) } : undefined,
      search ? {
        OR: [
          { nama: { contains: search.toLowerCase() } },
          { deskripsi: { contains: search.toLowerCase() } }
        ]
      } : undefined
    ].filter(Boolean)
  };

  const sortDirection = sort.toLowerCase() === 'asc' ? 'asc' : 'desc';

  return await prisma.kelas.findMany({
    where: whereClause,
    orderBy: {
      [orderBy]: sortDirection
    }
  });
};


const createNewKelas = async (body) => {
  const { nama, harga, deskripsi, background_foto, video } = body;
  return await prisma.kelas.create({
    data: {
      nama,
      harga,
      deskripsi,
      background_foto,
      video
    }
  });
};

const updateKelas = async (body, id) => {
  const { nama, harga, deskripsi, background_foto, video } = body;
  return await prisma.kelas.update({
    where: { id: parseInt(id, 10) },
    data: {
      nama,
      harga,
      deskripsi,
      background_foto,
      video
    }
  });
};

const deleteKelas = async (id) => {
  return await prisma.kelas.delete({
    where: { id: parseInt(id, 10) }
  });
};

module.exports = { getAllKelas, createNewKelas, updateKelas, deleteKelas };
