import prisma from '@/prisma';

export const FilterByLocationCategoryTitleRepo = async () =>
  // page: number,
  // limit: number,
  {
    try {
      const filter = await prisma.event.findMany({
        where: {
          title: {
            contains: '',
          },
        },
      });
      // ({
      // where: {
      //   title: { contains: '' },
      //   location: { contains: '' },
      //   category: { contains: '' },
      // },

      // skip: (page - 1) * limit,
      // take: limit,
      //   where: {
      //     title: { contains: '' },
      //   },
      // });

      return filter;
    } catch (error) {
      throw error;
    }
  };
