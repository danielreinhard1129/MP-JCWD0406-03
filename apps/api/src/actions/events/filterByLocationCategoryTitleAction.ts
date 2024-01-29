import { FilterByLocationCategoryTitleRepo } from '@/repositories/events/filterByLocationCategoryTitleRepo';

const filterByLocationCategoryTitleAction = async () =>
  // page: number,
  // limit: number,
  {
    try {
      const filter = await FilterByLocationCategoryTitleRepo();
      return {
        status: 200,
        message: 'success',
        data: filter,
      };
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

export default filterByLocationCategoryTitleAction;
